import { Application } from 'express';
import { RouteConfig } from '../utils/routeConfig';
import * as controller from '../controllers/jedzenie';
import { body } from 'express-validator';
import requestValidationMiddleware from '../utils/body.validation.middleware';

export class PracownikRoute extends RouteConfig {
  constructor(app: Application) {
    super(app, 'PracownikRoute');
  }

  configureRoutes() {
    this.app
      .route('/api/pracownik')
      .post(
        body('imie').isString(),
        body('nazwisko').isString(),
        body('pensja').isInt(),
        body('wyksztalcenie').isString(),
        body('data_urodzenia').isDate(),
        body('stanowisko').isString(),
        requestValidationMiddleware.verifyBodyOrQueryFieldsErrors,
        controller.postJedzenie);

    return this.app;
  }
}

module.exports = PracownikRoute;