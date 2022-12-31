const basicInfo = require('./basicInfo');
const servers = require('./servers');
const tags = require('./tags');
const security = require('./security');
const paths = require('./paths');
const definitions = require('./definitions');

module.exports = {
  ...basicInfo,
  ...servers,
  ...tags,
  ...security,
  ...definitions,
  ...paths,
};

