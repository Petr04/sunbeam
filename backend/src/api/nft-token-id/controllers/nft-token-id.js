'use strict';

/**
 * A set of functions called "actions" for `nft-token-id`
 */

const axios = require('axios')

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
    return response.data.onChain.status === 'success'
      ? response.data.onChain.tokenId
      : null
  }
};
