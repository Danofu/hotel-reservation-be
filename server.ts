('use strict');
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { RouteConfig } from './src/utils/routeConfig';
import passport from 'passport'

const app = express();

  const routes: Array<RouteConfig> = [];
  const UsersRoute =  require('./src/routes/usersRoutes');
  const AuthRoute =  require('./src/routes/authRoutes');
  const KategorjaRoute = require('./src/routes/kategorjaRoutes');
  const RezerwacjaRoute = require('./src/routes/rezerwacjaRoutes');
  const JedzenieRoute = require('./src/routes/jedzenieRoutes');
  app.use(cookieParser());
  app.enable('trust proxy');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  /**
 * -------------- PASSPORT AUTHENTICATION ----------------
 */
 /* app.use(passport.initialize());
  app.use(passport.session());*/
  app.options('*', cors());
  routes.push(new UsersRoute(app));
  routes.push(new AuthRoute(app));
  routes.push(new KategorjaRoute(app));
  routes.push(new RezerwacjaRoute(app));
  routes.push(new JedzenieRoute(app));

  const PORT = 8081;

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
  });

module.exports = app;
