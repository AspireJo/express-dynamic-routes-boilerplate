import mws from './../../middlewares';

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
