import path from 'path';

import { existsSync, mkdirSync } from "fs";
const dir = path.join(__dirname, './../documentation');

if (!existsSync(dir)){
  mkdirSync(dir);
}



export default {
  baseRoute: '/{version}/{route}',
  specs: {
    host: "aspire.jo",
  },
  patterns: {
    controllerInfoResolver: async fileName => {
      const [, method, version] = /(delete|get|post|put|patch)\.(v\d+)(\.\S+)*\.js$/.exec(fileName);
      return { method, version };
    },
    models: `${path.resolve(__dirname, './../app/api/')}/**/models/**/*.js`,
    schemas: `${path.resolve(__dirname, './../app/api/')}/**/schema/**/*.js`,
    controllers: `${path.resolve(__dirname, './../app/api/')}/**/controllers/**/_*.js`,
  },
  tags: [
    { name: 'Users', description: 'User management endpoints' },
    { name: 'Groups', description: 'Group management endpoints' },
  ],
  output: {
    location: dir,
    format: 'json'
  },
  params: {
    id: {
      name: 'id',
      in: 'path',
      description: 'Targeted object ID',
      required: true,
      type: 'number',
    },
  },
  versions: {
    v2: [
      {
        name: 'Authorization',
        in: 'header',
        description: 'Authorization token',
        required: true,
        type: 'string',
      },
    ],
  },
  customResponses: {
    204: {
      description: 'No content',
      schema: {
        properties: {
          code: {
            type: 'number',
          },
          message: {
            type: 'string',
          },
        },
      },
    },
    403: {
      description: 'Unauthorized',
      schema: {
        properties: {
          code: {
            type: 'number',
          },
          message: {
            type: 'string',
          },
        },
      },
    }
  }
};
