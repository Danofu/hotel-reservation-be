module.exports = {
  '/pokoj': {
    post: {
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/definitions/Pokoj',
            },
          },
        },
      },
      parameters: [],
      tags: ['Pokoj'],
      summary: 'Create Pokoj',
      description: 'Create Pokoj',
      responses: {
        200: {
          description: 'OK',
        }
      },
    },
  },
};