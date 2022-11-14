// 'use strict';

// require('dotenv').config();
// module.exports = {
//   host: process.env.SERVER_DOMAIN,
//   port: process.env.SERVER_PORT
// };

'use strict';

require('dotenv').config();
module.exports = {
  username: process.env.DEV_USER,
  password: process.env.DEV_PASS,
  database: process.env.DEV_DATABASE,
  host: process.env.DEV_HOST,
  dialect: 'mysql',
  logging: false
};