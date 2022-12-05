import { Application } from 'express';
import { RouteConfig } from '../utils/routeConfig';
import * as controller from '../controllers/menu';

export class MenuRoute extends RouteConfig {
  constructor(app: Application) {
    super(app, 'MenuRoute');
  }

  configureRoutes() {
    this.app
      .route('/api/menu/showMenu')
      .get([controller.showMenu]);

    return this.app;
  }
}

module.exports = MenuRoute;