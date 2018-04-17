export default (req, res, next) => {
  console.log('id v2 middleware');
  req.idParam = 'static id';
  next();
}