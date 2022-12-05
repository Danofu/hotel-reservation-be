import { Application } from "express";
import { RouteConfig } from "../utils/routeConfig";
import * as controller from "../controllers/jedzenie";
import { query, body } from "express-validator";
import requestValidationMiddleware from "../utils/body.validation.middleware";

export class JedzienieRoute extends RouteConfig {
  constructor(app: Application) {
    super(app, "JedzienieRoute");
  }

  configureRoutes() {
    this.app
      .route("/api/jedzienie/createJedzenie")
      .post([
        body("id_menu").isInt(),
        body("ilosc_osob").isInt(),
        requestValidationMiddleware.verifyBodyOrQueryFieldsErrors,
        controller.createJedzenie,
      ]);

    return this.app;
  }
}

module.exports = JedzienieRoute;
