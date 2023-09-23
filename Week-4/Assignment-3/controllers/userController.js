import pool from '../database.js';
import bcrypt from 'bcrypt';

// Sign-out user
export const signoutUser = (req, res, next) => {
  try {
    res.clearCookie('name');
    res.clearCookie('author_id');
    res.render('message', {
      message: '✅Logout successfully!',
      link: '/',
      page: 'homepage',
    });
  } catch (err) {
    next(err);
  }
};

// Sign-up user
export const signupUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const [result] = await pool.query(`SELECT * FROM user WHERE email = ?`, [email]);
    const user = result[0];

    // Check whether this email has been used
    if (user) {
      res.render('message', {
        message: '❌This email has been registered😮',
        link: '/',
        page: 'homepage',
      });
    } else {
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user
      const [result] = await pool.query(`INSERT INTO user(name,email,password) VALUES(?,?,?)`, [
        name,
        email,
        hashedPassword,
      ]);

      const author_id = result.insertId;

      // Set cookies
      res.cookie('name', name);
      res.cookie('author_id', author_id);

      res.redirect('/member');
    }
  } catch (err) {
    next(err);
  }
};

// Sign-in user
export const signinUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const [result] = await pool.query(`SELECT * FROM user WHERE email = ?`, [email]);
    const user = result[0];

    if (!user || !(await bcrypt.compare(password, user.password))) {
      // If user is not found or password doesn't match, return error message to client
      return res.render('message', {
        message: '❌Wrong email or password!',
        link: '/',
        page: 'homepage',
      });
    }

    // If both email and password match, set cookies and redirect to the member page
    res.cookie('name', user.name);
    res.cookie('author_id', user.id);
    res.redirect('/member');
  } catch (err) {
    next(err);
  }
};
