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

module.exports = { pinImage, pinJSON }
