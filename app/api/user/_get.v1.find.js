export function controller(req, res) {
  return res.json([
    {
      id: 1,
      name: 'aspire user 1',
      group:{
        id: 1,
        name: 'security group 1'
      }
    },
    {
      id: 1,
      name: 'aspire user 2',
      group:{
        id: 1,
        name: 'security group 1'
      }
    },
    {
      id: 1,
      name: 'aspire user 3',
      group:{
        id: 1,
        name: 'security group 2'
      }
    },
    {
      id: 1,
      name: 'aspire user 4',
      group:{
        id: 1,
        name: 'security group 1'
      }
    }
  ])
}
export const route = '/users';
