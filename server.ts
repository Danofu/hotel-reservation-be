('use strict');
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { RouteConfig } from './src/utils/routeConfig';

const app = express();

  const routes: Array<RouteConfig> = [];
  const UsersRoute =  require('./src/routes/usersRoutes');
  app.use(cookieParser());
  app.enable('trust proxy');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.options('*', cors());
  routes.push(new UsersRoute(app));

  const PORT = 8081;

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
  });

module.exports = app;
