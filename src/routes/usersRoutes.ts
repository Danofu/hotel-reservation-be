import { Application } from 'express';
import { RouteConfig } from '../utils/routeConfig';
import { checkToken } from '../utils/checkToken';
import getAllUsers from '../controllers/users';
import { query } from 'express-validator';
import requestValidationMiddleware from '../utils/body.validation.middleware';

class UsersRoute extends RouteConfig {
  constructor(app: Application) {
    super(app, 'AccontsRoute');
  }

  configureRoutes() {
    this.app
      .route('/api/accounts')
      .get([checkToken, getAllUsers]);

    return this.app;
  }
}

module.exports = UsersRoute;
