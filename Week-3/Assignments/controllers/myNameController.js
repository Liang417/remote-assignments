const path = require('path');
const errorHandler = require('../utils/errorHandler');

const getName = (req, res, next) => {
  try {
    const { name } = req.cookies;

    if (name) {
      res.render('myName', { name });
    } else {
      res.sendFile(path.join(__dirname, '../public', 'form.html'));
    }
  } catch (err) {
    next(new errorHandler());
  }
};

module.exports = { getName };
