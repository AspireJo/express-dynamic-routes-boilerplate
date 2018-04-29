import express from 'express';
import generator from '@aspirejo/express-route-generator';
import docGenerator from '@aspirejo/swagger-generator-express';
import genConfigs from './config/docs';
import config from './config';
import { serve, setup } from "swagger-ui-express";
import { join } from "path";
import fs from "fs";
import { promisify } from 'util';

const exists = promisify(fs.exists);
const app = express();

docGenerator.generate(genConfigs)
  .then(async () => {
    // swagger docs viewer
    const docsFile = join(__dirname, './documentation/output.json');
    await generator(app, {
      pattern: `${__dirname}/app/api/**/controllers/**/_*.js`,
      globalMiddlewares: [config.globalMiddleware],
      baseUrl: '/{0}',
      versioning: config.versionSettings
    });
    // eslint-disable-next-line global-require, import/no-dynamic-require
    if (await exists(docsFile)) app.use('/api-docs', serve, setup(require(docsFile), { explorer: true }));
    app.listen(3000, () => { console.log('server started on port 3000!') });
  });
