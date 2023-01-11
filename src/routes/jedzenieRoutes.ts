import { Application } from 'express';
import { RouteConfig } from '../utils/routeConfig';
import * as controller from '../controllers/jedzenie';
import { body } from 'express-validator';
import requestValidationMiddleware from '../utils/body.validation.middleware';

/**
 * It's a class of route Jedzenie
 * 
 * @class JedzenieRoute
 */
export class JedzenieRoute extends RouteConfig {
  constructor(app: Application) {
    super(app, 'JedzenieRoute');
  }

    /**
   * function configureRoutes()
   * 
   * @returns route Jedzenie
   */
  configureRoutes() {
    this.app
      .route('/api/jedzenie')
      .post(
        body('nazwa').isString(),
        body('kalorycznosc').isInt(),
        body('cena').isNumeric(),
        requestValidationMiddleware.verifyBodyOrQueryFieldsErrors,
        controller.postJedzenie)
      .get(controller.getJedzenie);

    return this.app;
  }
}

module.exports = JedzenieRoute;