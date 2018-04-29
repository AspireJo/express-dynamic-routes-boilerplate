import mws from './../../../middlewares';

/**
 * Get User info
 * @returns {user}
 * @property {string} tags - Users
 * @property {string} route - /users/{id}
 * @property {string} responseCodes - 204
 */
export function controller(req, res) {
  return res.json([
    {
      id: req.idParam,
      name: 'security group',
    },
  ])
}
export const route = '/users/:id';
export const middlewares = [mws.id2];
