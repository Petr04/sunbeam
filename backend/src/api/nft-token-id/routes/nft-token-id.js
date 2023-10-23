module.exports = {
  routes: [
     {
      method: 'GET',
      path: '/nft-token-id/:nftId',
      handler: 'nft-token-id.nftTokenId',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
