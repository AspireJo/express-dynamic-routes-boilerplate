/**
 * Get Groups list
 * @returns {group[]}
 * @property {string} tags - Groups
 * @property {string} route - /groups
 * @property {string} responseCodes - 204
 */
export function controller(req, res) {
  return res.json([
    {
      id: 1,
      name: 'security group 1'
    },
    {
      id: 2,
      name: 'security group 2'
    },
    {
      id: 3,
      name: 'security group 3'
    },
  ])
}
export const route = '/groups';
