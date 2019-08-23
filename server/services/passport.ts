import passport from 'passport';
import * as passportLocal from 'passport-local';
import bodyParser from 'body-parser';
import { Router } from 'express';
import User from '../models/User';

const LocalStrategy = passportLocal.Strategy;
const router: Router = Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Register New User
router.post('/register', (req, res) => {
  if (req.body.password === req.body.confirmPassword) {
    User.register(
      new User({
        username: req.body.username.trim().toLowerCase(),
        email: req.body.email.trim().toLowerCase(),
      }),
      req.body.password.trim(),
      err => {
        if (err) {
          console.log(err.message);
          res.send({ data: err.message });
        } else {
          passport.authenticate('local')(req, res, () => {
            res.send({
              success: true,
              user: req.user.username.trim(),
            });
          });
        }
      }
    );
  } else {
    res.send({ data: 'Passwords Do Not Match' });
  }
});

// Login
router.post('/login', passport.authenticate('local'), (req, res) => {
  if (!req.user) {
    res.send({
      success: false,
    });
  } else if (req.user) {
    res.send({
      success: true,
      user: req.user.username.trim(),
    });
  }
});

// Logout
router.post('/logout', (req, res) => {
  req.logout();
  return res.send({ data: 'You are logged out.' });
});

// Check Login
router.post('/checkLogin', (req, res) => {
  if (req.user) {
    res.json({ loggedIn: true, user: req.user.username.trim() });
  } else if (!req.user) {
    res.json({ loggedIn: false });
  }
});

export default router;
