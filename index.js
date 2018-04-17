import express from 'express';
import generator from '@aspirejo/express-route-generator';
import config from './config';

const app = express();
const genConfigs = {
  pattern: `${__dirname}/**/api/**/_*.js`,
  globalMiddlewares: [config.globalMiddleware],
  baseUrl: '/{0}',
  versioning: config.versionSettings
};

generator(app, genConfigs).then(() => {
  app.listen(3000, () => { console.log('server started on port 3000!') });
});
