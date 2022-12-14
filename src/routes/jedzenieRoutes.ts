import { Application } from 'express';
import { RouteConfig } from '../utils/routeConfig';
import * as controller from '../controllers/jedzenie';
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
        body('cena').isNumeric(),
        requestValidationMiddleware.verifyBodyOrQueryFieldsErrors,
        controller.postJedzenie);

    return this.app;
  }
}

module.exports = JedzenieRoute;