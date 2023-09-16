const errorHandler = require('../utils/errorHandler');

const getData = (req, res, next) => {
  try {
    const number = +req.query.number;

    // if lack of parameter
    if (!('number' in req.query)) {
      res.send(`
      <h1 style="text-align: center; margin-top: 45vh;">
        Lack of Parameter
      </h1>
      `);
    }
    // if invalid parameter
    else if (Number.isNaN(number) || !Number.isInteger(number) || number < 0) {
      res.send('Wrong Parameter');
    }
    // if parameter is valid
    else {
      // Because the time complexity is O(1), it can be calculated very efficiently no matter how big the number is.
      const result = ((1 + number) * number) / 2;
      res.status(200).send(`Result: ${result}`);
    }
  } catch (err) {
    next(new errorHandler('test message', 404));
  }
};

module.exports = { getData };
