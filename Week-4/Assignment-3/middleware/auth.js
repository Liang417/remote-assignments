export const userAuth = async (req, res, next) => {
  const { name } = req.cookies;

  if (!name) {
    return res.render('message', { message: 'Please login first!' });
  }
  next();
};
