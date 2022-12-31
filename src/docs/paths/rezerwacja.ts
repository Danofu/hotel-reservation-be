module.exports = {
  '/rezerwacja': {
    post: {
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/definitions/Rezerwacja',
            },
          },
        },
      },
      parameters: [],
      tags: ['Rezerwacja'],
      summary: 'Create rezerwacja',
      description: 'Create rezerwacja',
      responses: {
        200: {
          description: 'OK',
        }
      },
    },
  },
  "/rezerwacja/getAllByUser": {
    get: {
      parameters: [
        {
          in: 'query',
          name: 'id_user',
          description: 'User id',
          required: true,
          type: 'number',
        },
      ],
      tags: ["Rezerwacja"],
      summary: "Get All rezerwacja",
      responses: {
        200: {
          description: "OK",
        },
      },
    },
  },
  "/rezerwacja/delete": {
    delete: {
      parameters: [
        {
          in: 'query',
          name: 'id_rezerwacji',
          description: 'id rezerwacji',
          required: true,
          type: 'number',
        },
      ],
      tags: ["Rezerwacja"],
      summary: "Delete rezerwacja",
      responses: {
        200: {
          description: "OK",
        },
      },
    },
  },
};