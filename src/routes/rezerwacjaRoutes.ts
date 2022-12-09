import { Application } from 'express';
import { RouteConfig } from '../utils/routeConfig';
import * as controller from '../controllers/rezerwacja';
import { body } from 'express-validator';
import requestValidationMiddleware from '../utils/body.validation.middleware';

export class RezerwacjaRoute extends RouteConfig {
  constructor(app: Application) {
    super(app, 'RezerwacjaRoute');
  }

  configureRoutes() {
    this.app
      .route('/api/rezerwacja')
      .post(
        body('id_pokoj').isInt(),
        body('id_user').isInt(),
        body('check_in').isString(),
        body('check_out').isString(),
        requestValidationMiddleware.verifyBodyOrQueryFieldsErrors,
        controller.rezarwacja);

    return this.app;
  }
}

module.exports = RezerwacjaRoute;