module.exports = {
  '/auth/login': {
    post: {
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/definitions/Login',
            },
          },
        },
      },
      parameters: [],
      tags: ['Auth'],
      summary: 'Authorization',
      description: 'Login in to the site',
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                $ref: '#/definitions/UserLoginCorrect',
              },
            },
          },
        },
        400: {
          description: 'Incorrect data',
        },
      },
    },
  },
  '/auth/registration': {
    post: {
      parameters: [],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/definitions/CreateUser',
            },
          },
        },
      },
      tags: ['Auth'],
      summary: 'Create user',
      description: 'Create User',
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                $ref: '#/definitions/UserLoginCorrect',
              },
            },
          },
        },
        403: {
          description: 'User already exists',
        },
      },
    },
  },
};
