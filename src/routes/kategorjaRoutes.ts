import { Application } from 'express';
import { RouteConfig } from '../utils/routeConfig';
import * as controller from '../controllers/kategorja';
import requestValidationMiddleware from '../utils/body.validation.middleware';

/**
 * It's a class of route Kategorja
 * 
 * @class KategorjaRoute
 */
export class KategorjaRoute extends RouteConfig {
  constructor(app: Application) {
    super(app, 'KategorjaRoute');
  }

    /**
   * function configureRoutes()
   * 
   * @returns route Kategorja
   */
  configureRoutes() {
    this.app
      .route('/api/kategorja/getAllPokoj')
      .get(
        controller.getAllPokoj);

    return this.app;
  }
}

module.exports = KategorjaRoute;