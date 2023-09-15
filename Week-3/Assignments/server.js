const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send(`
    <h1 style="text-align: center; margin-top: 45vh;">
      Hello, My Server
    </h1>
  `);
});

// route
const dataRoute = require('./routes/dataRoute');
const trackNameRoute = require('./routes/trackNameRoute');
const myNameRoute = require('./routes/myName');

app.use('/data', dataRoute);
app.use('/myName', myNameRoute);
app.use('/trackName', trackNameRoute);
app.use((err, req, res, next) => {
  err.status = err.status || 500;
  err.message = err.message || 'Internal server Error';

  res.status(err.status).json({
    message: err.message,
  });
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});

process.on('SIGINT', function () {
  process.exit();
});
