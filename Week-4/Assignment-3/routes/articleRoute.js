import express from 'express';
import { createArticle, getArticlesByAuthorID } from '../controllers/articleController.js';
const router = express.Router();

// Get articles by author_id
router.get('/:author_id', getArticlesByAuthorID);
// Create article
router.post('/', createArticle);

export default router;
