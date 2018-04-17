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
