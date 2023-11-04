module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '71963b6dd18f7ed5e8fe5c0ff6e1a0e0'),
    },
  },
});
