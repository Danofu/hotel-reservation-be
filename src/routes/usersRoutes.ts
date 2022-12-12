import { Application } from "express";
import { RouteConfig } from "../utils/routeConfig";
import * as controller from "../controllers/users";
import { query } from "express-validator";
import requestValidationMiddleware from "../utils/body.validation.middleware";
import { checkToken } from "../utils/checkToken";

export class UsersRoute extends RouteConfig {
  constructor(app: Application) {
    super(app, "UsersRoute");
  }

  configureRoutes() {
    this.app.route("/api/users").get([controller.getAllusers]);

    this.app
      .route("/api/users/getUserById")
      .get([
        query("id").isInt(),
        requestValidationMiddleware.verifyBodyOrQueryFieldsErrors,
        controller.getUserById,
      ]);

    this.app
      .route("/api/user/me")
      .get([
        checkToken,
        query("token").isString(),
        requestValidationMiddleware.verifyBodyOrQueryFieldsErrors,
        controller.getUserByToken,
      ]);

    return this.app;
  }
}

module.exports = UsersRoute;
