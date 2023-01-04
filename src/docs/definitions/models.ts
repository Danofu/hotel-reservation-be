module.exports = {
  Login: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
      },
      password: {
        type: 'string',
      },
    },
  },
  CreateUser: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
      },
      firstname: {
        type: 'string',
      },
      lastname: {
        type: 'string',
      },
      organisation: {
        type: 'string',
      },
    },
  },
  UserLoginCorrect: {
    type: 'object',
    properties: {
      token: {
        type: 'string',
      },
      message: {
        type: 'string',
      },
    },
  },
  Jedzenie: {
    type: 'object',
    properties: {
      nazwa: {
        type: 'string',
      },
      kalorycznosc: {
        type: 'number',
      },
      cena: {
        type: 'number',
      },
    },
  },
  Pokoj: {
    type: 'object',
    properties: {
      kategorja: {
        type: 'string',
      },
      ilosc_miejsc: {
        type: 'number',
      },
      ilosc_mieszkan: {
        type: 'number',
      },
      dodatkowa_informacja: {
        type: 'string',
      },
      cena: {
        type: 'number',
      },
    },
  },
  Pracownik: {
    type: 'object',
    properties: {
      imie: {
        type: 'string',
      },
      nazwisko: {
        type: 'string',
      },
      pensja: {
        type: 'number',
      },
      wyksztalcenie: {
        type: 'string',
      },
      data_urodzenia: {
        type: 'string',
        format: 'date-time',
      },
      stanowisko: {
        type: 'string',
      },
    },
  },
  Rezerwacja: {
    type: 'object',
    properties: {
      id_pokoj: {
        type: 'number',
      },
      id_user: {
        type: 'number',
      },
      check_in: {
        type: 'string',
        format: 'date-time',
      },
      check_out: {
        type: 'string',
        format: 'date-time',
      },
      menu: {
        type: 'array',
        items: {
          type: 'number',
        },
      }
    },
  },
};
