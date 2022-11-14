'use strict';

const config = {

    username: process.env.DEV_USER,
    password: process.env.DEV_PASS,
    database: process.env.DEV_DATABASE,
    host: process.env.DEV_HOST,
    dialect: 'mysql',
    logging: false



};

export default config;