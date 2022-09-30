const express = require("express");
const router = new express.Router();
const strain = require("../../models/strain");
const review = require("../../models/review");
const favorite = require("../../models/favorites");
const Favorites = require("../../models/favorites");

const reviewData = require("../../seeds/reviewData.json");
const { User, Strain, Review } = require("../../models");


const { reset } = require("nodemon");
const strainData = require("../../seeds/strainData.json");
const db = require('../../config/connection');

// **** MISC PAGE ROUTES ****

// GET signup
router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/logout", (req, res) => {
  res.render("verifyAge");
});

//Get login route
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/myReviews", (req, res) => {
  res.render("myReviews");
});


// **** AGE VERIFICATION ROUTES ****

// GET verify age
router.get("/", (req, res) => {
  return res.render("verifyAge");
});

// POST verify age
router.post("/verifyAge", (req, res) => {
  const { ageGroup } = req.body;
  if (ageGroup === "true") {
    res.render("home");
  } else {
    return res.render("verifyAge");
  }
});

// **** LOGIN ROUTES ****

// TODO: POST login *REFACTOR*

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.user_name } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
        // res.redirect('/login')
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
        // res.redirect('/login')
      return;
    }

    res.redirect('/strains')
    // req.session.save(() => {
    //   req.session.user_id = userData.id;
    //   req.session.logged_in = true;

    //   res.json({ user: userData, message: 'You are now logged in!' });
    // });

  } catch (err) {
    res.status(400).json(err);
  }
});

// TODO: GET LOGIN


// **** SIGNUP ROUTES ****

// POST signup
  router.post('/signup', async (req, res) => {
    try {
      const newUserData = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password,
  
      });
      res.status(200).json(newUserData);
    } catch (err) {
      res.status(400).json(err);
    }
  });



// **** STRAIN ROUTES ****

// GET all strains
router.get("/strains", (req, res) => {
  Strain.findAll({
    attributes: [
      'id',
      'name',
      'type',
      'positive_effects',
      'negative_effects',
      'img'
    ],
  })
    .then(strainData => {
      const strains = strainData.map(strain => strain.get({ plain: true }));
      res.render('browse', {
        strains
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET strain by id
router.get("/api/strain/:id", (req, res) => {
  strain
    .findOne({
      where: {
        id: req.params.id,
      },
    })
    .then((strain) => res.json(strain))
    .catch((error) => res.status(400).json(error));
});

// **** REVIEW ROUTES ****
// GET all reviews
router.get("/reviews", async (req, res) => {
  Review.findAll({
    attributes: [
      'id',
      'title',
      'rating',
      'strain_id',
      'content',
      'user_id',
      'timestamp'
    ],
  })
    .then(reviewData => {
      const reviews = reviewData.map(review => review.get({ plain: true }));
      res.render('allReviews', {
        reviews
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET review by ID **May not need**
router.get("/api/review/:id", (req, res) => {
  review
    .findOne({
      where: {
        id: req.params.id,
      },
    })
    .then((review) => res.json(review))
    .catch((error) => res.status(400).json(error));
});

// TODO: GET Route for User Review (ER2)

// TODO: POST review *REFACTOR*
router.post("/postReview", async(req, res) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(200).json(newReview)

      // res.redirect(allReviews)
  } catch (err) {
    res.status(400).json(err);
  }
});

// **** FAVORITE ROUTES ****

// GET all favorites
router.get("/favorites", (req, res) => {
  favorite
    .findAll({})
    .then((favorite) => res.json(favorite))
    .catch((error) => res.status(400).json(error));
});

// TODO: GET favorites by ID **REFACTOR**
router.get("api/favorite/:id", (req, res) => {
  favorite
    .findByPk({
      where: {
        id: req.params.id,
      },
    })
    .then((favorite) => res.json(favorite))
    .catch((error) => res.status(400).json(error));
});

// POST favorite
router.post("/post-favorite", async (req, res) => {
  try {
  const newFav =  await Favorites.create(req.body);

  res.status(200).json(newFav);
  } catch (err) {
    res.status(400).json(err);
  }
});

// TODO DELETE favorite **REFACTOR**
router.delete('/delete-fav/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const  deletFav = await Favorites.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletFav) {
      res.status(404).json({ message: 'Invalid' });
      return;
    }
    res.status(200).json(deletFav);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;