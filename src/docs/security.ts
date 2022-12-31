module.exports = {
  components: {
    securitySchemes: {
      BearerAuth: {
        scheme: 'bearer',
        name: 'Authorization',
        in: 'header',
        type: 'apiKey',
        description: 'JWT Authorization header',
      },
    },
  },
  security: [{ BearerAuth: [] }],
};