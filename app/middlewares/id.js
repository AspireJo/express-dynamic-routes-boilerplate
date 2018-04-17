export default (req, res, next) => {
  console.log('id middleware');
  req.idParam = req.params.id;
  next();
};
