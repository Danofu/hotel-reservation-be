('use strict');
import assignSecretKeys from './src/utils/assign-keys';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import { RouteConfig } from './src/utils/routeConfig';

const app = express();
// assign google secrets to env variables
assignSecretKeys().then(() => {
  app.emit('ready');
});

app.on('ready', () => {
  const UsersRoutes = require('./routes/usersRoute');

  const multerMid = multer({
    storage: multer.memoryStorage(),
    limits: {
      // no larger than 5mb.
      fileSize: 5 * 1024 * 1024,
    },
  });

  const routes: Array<RouteConfig> = [];

  app.use(multerMid.single('file'));
  app.use(cookieParser());
  app.enable('trust proxy');
  app.use(require('morgan')('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.options('*', cors());
  routes.push(new UsersRoutes(app));

  app.use(
    compression({
      level: 9,
      threshold: 0,
      filter: (req, res) => {
        if (req.headers['x-no-compression']) {
          return false;
        }
        return compression.filter(req, res);
      },
    }),
  );

  const PORT = 8081;

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
  });
});

module.exports = app;
