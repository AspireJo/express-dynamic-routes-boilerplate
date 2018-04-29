/**
 * Get Group info
 * @returns {group}
 * @property {string} tags - Groups
 * @property {string} route - /groups/{id}
 * @property {string} responseCodes - 204
 */
export function controller(req, res) {
  return res.json([
    {
      id: req.idParam,
      name: `security group ${req.idParam}`
    },
  ])
}
export const route = '/groups/:id';
