"use strict";

import express from "express";
import petController from "../controllers/pet.controller.js";

const router = express.Router();

const petRouters = (app) => {
  router.route("/get/:id").get(petController.getPet);
  app.use("/api/v1/pet", router);
};

export default petRouters;
