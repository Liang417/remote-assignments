import express from 'express';
import { userAuth } from './middleware/auth.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoute.js';
import articleRoutes from './routes/articleRoute.js';

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  const { name } = req.cookies;
  res.render('homepage', { name });
});

app.get('/member', userAuth, (req, res) => {
  const { name, author_id } = req.cookies;
  res.render('member', { name, author_id });
});

app.use('/user', userRoutes);
app.use('/article', articleRoutes);
app.use((err, req, res, next) => {
  res.send(`
  <h1 style='text-align: center; margin-top: 45vh;'>
  ${err.message}
  </h1>
  `);
});

app.listen(8080, () => {
  console.log(`Server is running at http://localhost:8080`);
});
