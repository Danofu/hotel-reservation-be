import { Application } from 'express';
import { RouteConfig } from '../utils/routeConfig';
import * as controller from '../controllers/pokoj';
import { body } from 'express-validator';
import requestValidationMiddleware from '../utils/body.validation.middleware';

export class PokojRoute extends RouteConfig {
  constructor(app: Application) {
    super(app, 'PokojRoute');
  }

  configureRoutes() {
    this.app
      .route('/api/pokoj')
      .post(
        body('kategorja').isString(),
        body('ilosc_miejsc').isInt(),
        body('ilosc_mieszkan').isInt(),
        body('dodatkowa_informacja').isString(),
        body('cena').isInt(),
        requestValidationMiddleware.verifyBodyOrQueryFieldsErrors,
        controller.postPokoj);

    return this.app;
  }
}

module.exports = PokojRoute;