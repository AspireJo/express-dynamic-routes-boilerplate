# express-dynamic-routes-boilerplate

A sample of how to use [express-route-generator](https://www.npmjs.com/package/@aspirejo/express-route-generator).

## Project structure

```
- index.js
- config  
  - index.js
- app  
  - api  
    - group
      | ...
    - user
      | ...
  - middlewares  
    - id.js
    - id.v2.js
    - index.js
```
* index.js: entry point
* config: configurations
* app
  * api: api endpoints implemntation
  * middlewares: express middlewares implementation

## Target
| endpoint | version | route middlewares | controller |
| --- | --- | --- | --- |
| `/v1/groups/:id` | v1 | | _get.v1.find |
| `/v1/groups` | v1 | | _get.v1 |
| `/v2/groups` | v2 | id.v2 | _get.v2 |
| `/v1/users/:id` | v1 | | _get.v1.find |
| `/v1/users` | v1 | | _get.v1 |
| `/v2/users` | v2 | id.v2 | _get.v2 |

## Middlewares
Middlewares are defined based on thier scope level
- global : applied on all routes 
- version & parameter: applied on a router handler level (each version has its own `routerHandler` [see [`express-promise-router`](https://www.npmjs.com/package/express-promise-router)])
- route : applied on a single endpoint

in this sample all levels are used as follows 
### global
defined in the `config/index.js` --> `globalMiddleware` property, it is a simple middleware that only logs to a console

### version
defined in the `config/index.js` --> `versionSettings.v1` --> `middlewares` & `paramsMiddlewares`, the router middleware is a simple one that only logs to a console, while the param middleware reads the value of the `id` param and sets it in `req.idParam` object

### route
defined in `app/api/*/_get.v2.js` --> `middlewares` property, reads the value of the `id` param and sets it in `req.idParam` object

### APIs swagger documentation
Endpoint documentation generated using [@aspirejo/swagger-generator-express](https://www.npmjs.com/package/@aspirejo/swagger-generator-express) and the presentation UI is generated using [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express), url is : `http://localhost:3000/api-docs/`

# Run
execute 
> ``` shell
> npm install
> 
> npm start
> ```

now you can see the result in the console and test the server
