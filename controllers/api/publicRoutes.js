
const express = require('express');
const router = new express.Router();
const strain = require('../../models/strain');
const review = require('../../models/review')

// home routes
router.get('/', (req, res) => {
    return res.render('verifyAge');
})

router.post('/verifyAge', (req, res) => {
    const { ageGroup } = req.body;

    if (ageGroup === 'true') {
        res.render('home');
    } else {
        return res.render('verifyAge');
    }
})

// LOGIN ROUTES 
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    res.send(email + ' logged in. Password: ' + password);
    
})


// SIGNUP ROUTES
router.get('/signup', (req, res) => {
    res.render('signup');
})
router.post('/signup', async (req, res) => {
  try {
    const newUserData = await user.create({
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


// STRAIN ROUTES
// get all strains
router.get('/strains', (req, res) => {
  strain.findAll({})
    .then ((strain) => res.json(strain))
    .catch ((error) => res.status(400).json(error))
  });

  router.get('/api/strain/:id', (req, res) => {
    // find a single product by its `id`
    // be sure to include its associated Category and Tag data
    strain.findOne({
      where: {
        id: req.paraems.id,
      }
    })
    .then((strain) => res.json(strain))
    .catch((error) => res.status(400).json(error))
  });

// review routes
// get all reviews
router.get('/reviews', (req, res) => {
    review.findAll({})
    .then ((review) => res.json(review))
    .catch ((error) => res.status(400).json(error))
});


// get review by ID
router.get('api/review/:id', (req, res) => {
    review.findOne({
        where: {
            id: req.params.id,
        },
    })
    .then((review) => res.json(review))
    .catch((error) => res.status(400).json(error))
});

router.post('/review', async (req, res) => {
  try {
    const locationData = await Review.create({
      user_id: req.body.user_id,
      content: req.body.content,
      rating: req.body.rating,
      strain_id: req.body.strain_id,
      title: req.body.title,
      timestamp: req.body.timestamp,

    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});



//* FAVORITE ROUTES
// TODO: Create dummy data for favorites to illustrate and test routes
// GET all favorites
// router.get("/favorites", (req, res) => {
//   favorite
//     .findAll({})
//     .then((favorite) => res.json(favorite))
//     .catch((error) => res.status(400).json(error));
// });

// // GET favorites by ID
// router.get("api/favorite/:id", (req, res) => {
//   favorite
//     .findByPk({
//       where: {
//         id: req.params.id,
//       },
//     })
//     .then((favorite) => res.json(favorite))
//     .catch((error) => res.status(400).json(error));
// });




// // POST favorite
// router.post("/post-favorite", (req, res) => {
//   const { strain_id } = req.body;
//   res.send(
//     `${strain_id}`
//   );
// });

//Refactored POST for Review




module.exports = router;