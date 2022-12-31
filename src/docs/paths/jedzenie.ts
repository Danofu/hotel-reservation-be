module.exports = {
  '/jedzenie': {
    post: {
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/definitions/Jedzenie',
            },
          },
        },
      },
      parameters: [],
      tags: ['Jedzenie'],
      summary: 'Create jedzenie',
      description: 'Create jedzenie',
      responses: {
        200: {
          description: 'OK',
        }
      },
    },
  },
};