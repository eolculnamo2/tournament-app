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
        email: req.body.email.trim(),
      }),
      req.body.password.trim(),
      err => {
        if (err) {
          console.log(err.message);
          res.send({ data: err.message });
        } else {
          passport.authenticate('local')(req, res, () => {
            res.send({
              name: 'authenticated',
              user: req.user.username.trim(),
              data: 'Registration Successful!',
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
      name: 'invalid-credentials',
      data: 'Login Failed. Please try Again.',
    });
  } else if (req.user) {
    res.send({
      name: 'authenticated',
      user: req.user.username.trim(),
      data: 'Login Successful!',
    });
  }
});

// Logout
router.post('/logout', (req, res) => {
  req.logout();
  return res.send({ data: 'You are logged out.' });
});

router.post('/getUserProfile', (req, res) => {
  if (req.user) {
    res.json({ data: req.user });
  } else if (!req.user) {
    res.json({ data: false });
  }
});

router.post('/getProfile', (req, res) => {
  User.findOne({ username: req.body.profile }, (err, response) => {
    let isContact = false;
    if (req.user) {
      for (let i = 0; i < req.user.contacts.length; i += 1) {
        if (response && response.username === req.user.contacts[i].username) {
          isContact = true;
          break;
        }
      }
      if (response && req.user.username === response.username) {
        isContact = true;
      }
    }
    if (response === null) {
      res.json({ data: false });
    } else {
      res.json({ data: response, isContact });
    }
  });
});

export default router;
