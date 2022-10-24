import { Application } from 'express';
import { RouteConfig } from '../utils/routeConfig';
import * as controller from '../controllers/users';
import { query } from 'express-validator';
import requestValidationMiddleware from '../utils/body.validation.middleware';

export class UsersRoute extends RouteConfig {
  constructor(app: Application) {
    super(app, 'UsersRoute');
  }

  configureRoutes() {
    this.app
      .route('/api/users')
      .get([controller.getAllusers]);

    return this.app;
  }
}

module.exports = UsersRoute;
