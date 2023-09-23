import express from 'express';
import { signoutUser, signinUser, signupUser } from '../controllers/userController.js';
const router = express.Router();

// Sign-out user
router.get('/sign-out', signoutUser);
// Sign-up user
router.post('/sign-up', signupUser);
// Sign-in user
router.post('/sign-in', signinUser);

export default router;
