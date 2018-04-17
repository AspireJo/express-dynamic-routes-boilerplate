export function controller(req, res) {
  return res.json([
    {
      id: req.idParam,
      name: `security group ${req.idParam}`
    },
  ])
}
export const route = '/groups/:id';
