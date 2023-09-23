import pool from '../database.js';

// Create article
export const createArticle = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const { author_id } = req.cookies;

    await pool.query('INSERT INTO article(title,content,author_id) VALUES(?,?,?)', [
      title,
      content,
      author_id,
    ]);
    res.render('message', {
      message: '✅Create new article successfully!',
      link: '/member',
      page: 'member page',
    });
  } catch (err) {
    next(err);
  }
};

// Get articles by author_id
export const getArticlesByAuthorID = async (req, res, next) => {
  try {
    const { author_id } = req.params;
    const [result] = await pool.query('SELECT title,content FROM article WHERE author_id = ?', [
      author_id,
    ]);

    // If no articles found, return a message
    if (!result[0]) {
      return res.render('message', {
        message: 'You have not posted any articles yet!',
        link: '/member',
        page: 'member page',
      });
    }

    res.json(result);
  } catch (err) {
    next(err);
  }
};
