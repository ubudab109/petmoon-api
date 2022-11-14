'use strict';

import 'babel-register';

import express from 'express';

import petRouters from './src/v1/routers/pet.router.js';

const app = express();
const port = 3000;

const registerApi = (app) => {
  petRouters(app);
};

registerApi(app);

app.listen(port, () => {
  console.log(`service started and listening on ${port}`);
});
