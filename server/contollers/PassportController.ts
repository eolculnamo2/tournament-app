import passport from 'passport';
import { Router } from 'express';
import PassportService from '../services/PassportService';
import { INewUser } from '../../constants/interfaces';

const router: Router = Router();
const { newUser, handleLogin, logout, checkLogin } = new PassportService();

// Register New User
router.post('/register', (req, res) => {
  newUser(req.body as INewUser, req, res);
});

// Login
router.post('/login', passport.authenticate('local'), (req, res) => {
  handleLogin(req, res);
});

// Logout
router.post('/logout', (req, res) => {
  logout(req, res);
});

// Check Login
router.post('/checkLogin', (req, res) => {
  checkLogin(req, res);
});

export default router;
