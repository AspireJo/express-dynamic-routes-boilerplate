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
      name: `aspire user ${req.idParam}`,
      group:{
        id: 1,
        name: 'security group 1'
      }
    },
  ])
}
export const route = '/users/:id';
