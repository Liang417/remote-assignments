const path = require('path');

const getName = (req, res, next) => {
  try {
    const { name } = req.cookies;

    if (name) {
      res.render('myName', { name });
    } else {
      res.sendFile(path.join(__dirname, '../public', 'form.html'));
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { getName };
