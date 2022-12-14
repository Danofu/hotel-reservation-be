import { Application } from 'express';
import { RouteConfig } from '../utils/routeConfig';
import * as controller from '../controllers/auth';
import { body } from 'express-validator';
import requestValidationMiddleware from '../utils/body.validation.middleware';

export class JedzenieRoute extends RouteConfig {
  constructor(app: Application) {
    super(app, 'JedzenieRoute');
  }

  configureRoutes() {
    this.app
      .route('/api/jedzenie')
      .post(
        body('nazwa').isString(),
        body('kalorycznosc').isInt(),
        body('cena').isInt(),
        requestValidationMiddleware.verifyBodyOrQueryFieldsErrors,
        controller.register);

    return this.app;
  }
}

module.exports = JedzenieRoute;