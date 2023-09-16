const errorHandler = require('../utils/errorHandler');

const trackName = (req, res, next) => {
  try {
    const { name } = req.query;

    if (name) {
      res.cookie('name', name);
      res.redirect('/myName');
    } else {
      res.send(`
      <h1 style="text-align: center; margin-top: 45vh;">
      Please enter a valid name😡
      </h1>
      `);
    }
  } catch (err) {
    next(new errorHandler());
  }
};

module.exports = { trackName };
