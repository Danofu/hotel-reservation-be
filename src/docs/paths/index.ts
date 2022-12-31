const auth = require('./auth');
const jedzenie = require('./jedzenie');
const kategorja = require('./kategorja');
const pokoj = require('./pokoj');
const pracownik = require('./pracownik');
const rezerwacja = require('./rezerwacja');
const users = require('./users');


module.exports = {
  paths: {
    ...auth,
    ...jedzenie,
    ...kategorja,
    ...pokoj,
    ...pracownik,
    ...rezerwacja,
    ...users,
  },
};