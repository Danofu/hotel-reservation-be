module.exports = {
  '/pracownik': {
    post: {
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/definitions/Pracownik',
            },
          },
        },
      },
      parameters: [],
      tags: ['Pracowniki'],
      summary: 'Create pracownik',
      description: 'Create pracownik',
      responses: {
        200: {
          description: 'OK',
        }
      },
    },
  },
};