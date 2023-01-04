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
    get: {
      parameters: [
      ],
      tags: ["Jedzenie"],
      summary: "Get All Jedzenie",
      responses: {
        200: {
          description: "OK",
        },
      },
    },
  },
};