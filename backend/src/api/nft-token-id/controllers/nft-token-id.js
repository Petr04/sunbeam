'use strict'

const axios = require('axios')

/**
 * A set of functions called "actions" for `nft-token-id`
 */

module.exports = {
  async nftTokenId(ctx, next) {
    const response = await axios.get(
      `https://staging.crossmint.com/api/2022-06-09/collections/${process.env.CROSSMINT_COLLECTION_ID}/nfts/${ctx.params.nftId}`,
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "x-client-secret": `${process.env.CROSSMINT_KEY}`,
          "x-project-id": `${process.env.CROSSMINT_PROJECT_ID}`,
        },
      }
    )
    const nftTokenId = response.data.onChain.tokenId

    const pictures = await strapi.entityService.findMany('api::picture.picture', {
      fields: ['id'],
      filters: { nftId: ctx.params.nftId }
    })
    const picture = pictures[0]

    if (response.data.onChain.status === 'success') {
      await strapi.entityService.update('api::picture.picture', picture.id, {
        data: { nftTokenId }
      })
      return nftTokenId
    }

    return null
  }
};
