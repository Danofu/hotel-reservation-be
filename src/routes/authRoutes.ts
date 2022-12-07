import { Application } from 'express';
import { RouteConfig } from '../utils/routeConfig';
import * as controller from '../controllers/auth';
import { body } from 'express-validator';
import requestValidationMiddleware from '../utils/body.validation.middleware';

export class AuthRoute extends RouteConfig {
  constructor(app: Application) {
    super(app, 'AuthRoute');
  }

  configureRoutes() {
    this.app
      .route('/api/auth/registration')
      .post(
        body('email').isEmail(),
        body('password').isString(),
        body('first_name').isString(),
        body('last_name').isString(),
        requestValidationMiddleware.verifyBodyOrQueryFieldsErrors,
        controller.register);

    this.app
      .route('/api/auth/login')
      .post(
        body('email').isEmail(),
        body('password').isString(),
        requestValidationMiddleware.verifyBodyOrQueryFieldsErrors,
        controller.login,
      );

    return this.app;
  }
}

module.exports = AuthRoute;