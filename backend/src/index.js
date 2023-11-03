'use strict';

const axios = require('axios')
const fs = require('fs')
const pinataSDK = require('@pinata/sdk')

const pinata = new pinataSDK({ pinataJWTKey: process.env.PINATA_JWT })

async function pinImage(strapi, data) {
  const responseImage = await strapi.entityService.findOne('plugin::upload.file', data.image)
  const pathToFile = 'public' + responseImage.url
  const readStream = fs.createReadStream(pathToFile)
 
  const response = await pinata.pinFileToIPFS(readStream, {
    pinataMetadata: {
      name: data.title,
    }
  })
 
  return response.IpfsHash
}

async function pinJSON(data, ipfsHash) {
  const response = await pinata.pinJSONToIPFS({
    pinataContent: {
      name: data.title,
      description: data.description,
      external_url: 'https://sunbeam55.com',
      image: 'ipfs://' + ipfsHash
    },
    pinataMetadata: {
      name: data.title,
    }
  })

  return response.IpfsHash
}

async function mint(metadataCID, wallet) {
  const data = {
    recipient: 'polygon:' + wallet,
    metadata: 'https://gateway.pinata.cloud/ipfs/' + metadataCID,
  }

  const response = await axios.post(
    `https://staging.crossmint.com/api/2022-06-09/collections/${process.env.CROSSMINT_COLLECTION_ID}/nfts`,
    data,
    {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "x-client-secret": `${process.env.CROSSMINT_KEY}`,
        "x-project-id": `${process.env.CROSSMINT_PROJECT_ID}`,
      },
    }
  )

  return {
    nftId: response.data.id,
    nftContractAddress: response.data.onChain.contractAddress,
    nftStatus: response.data.onChain.status,
    nftTokenId: response.data.onChain.status !== 'pending'
      ? null
      : response.data.onChain.tokenId,
  }
}

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    strapi.db.lifecycles.subscribe({
      models: ['api::picture.picture'],
      async beforeCreate(event) {
        const { data } = event.params;

        if (!data.mint) return;

        const imageCID = await pinImage(strapi, data)
        const metadataCID = await pinJSON(data, imageCID)
        const nftData = await mint(metadataCID, process.env.RECEPIENT_WALLET_ADDRESS)
        event.params.data = { ...event.params.data, ...nftData }
      },
    })
  },
};
