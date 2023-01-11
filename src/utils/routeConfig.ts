import {Application} from 'express';

/**
 * class RouteConfig
 */
export abstract class RouteConfig {
  app: Application
  name: string
  constructor(app: Application, name: string) {
    this.app = app
    this.name = name
    this.configureRoutes()
  }
  /**
   * function getName()
   * 
   * @returns name
   */
  getName() {
    return this.name
  }
  abstract configureRoutes(): Application
}