import middlewares from './../app/middlewares';

export default {
  globalMiddleware: ((req, res, next) => { console.log('global middleware'); next(); }),
  versionSettings: {
    v1: {
      middlewares: [(req, res, next) => { console.log('v1 middleware'); next(); }],
      paramsMiddlewares: [{ id: middlewares.id }]
    }
  }
}