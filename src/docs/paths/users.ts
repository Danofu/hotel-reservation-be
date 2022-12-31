module.exports = {
  "/users": {
    get: {
      parameters: [
      ],
      tags: ["Users"],
      summary: "Get all users",
      responses: {
        200: {
          description: "OK",
        },
      },
    },
  },
  "/users/getUserById": {
    get: {
      parameters: [
        {
          in: 'query',
          name: 'id',
          description: 'id',
          required: true,
          type: 'number',
        },
      ],
      tags: ["Users"],
      summary: "Get user by id",
      responses: {
        200: {
          description: "OK",
        },
      },
    },
  },
  "/user/me": {
    get: {
      parameters: [
      ],
      tags: ["Users"],
      summary: "Get me",
      responses: {
        200: {
          description: "OK",
        },
      },
    },
  },
};