import passport from 'passport';
import LocalStrategy from 'passport-local';
import bodyParser from 'body-parser';
import { Router } from 'express';
// models
import User from '../models/User';

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
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.displayName,
        headline: req.body.headline,
        profileImage: req.body.imageUrl,
        location: req.body.location,
        group: req.body.studyGroup,
        bestThree: [req.body.skill1, req.body.skill2, req.body.skill3],
        articles: [],
        likedArticles: [],
        contacts: [],
        groupMembers: [],
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

router.post('/checkLogin', (req, res) => {
  if (req.user) {
    res.json({ loggedIn: true, user: req.user.username.trim() });
  } else if (!req.user) {
    res.json({ loggedIn: false });
  }
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
        if (response.username === req.user.contacts[i].username) {
          isContact = true;
          break;
        }
      }
      if (req.user.username === response.username) {
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

router.post('/add-contact', (req, res) => {
  if (req.user) {
    User.findOneAndUpdate(
      { username: req.user.username },
      {
        $push: {
          contacts: {
            username: req.body.username,
            image: req.body.image,
          },
        },
      },
      () => {
        res.json({ data: true });
      }
    );
  } else if (!req.user) {
    res.json({ data: false });
  }
});

export default router;
