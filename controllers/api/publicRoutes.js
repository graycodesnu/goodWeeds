// const express = require('express');
// const router = new express.Router();

// router.get('/', (req, res) => {
//     return res.render('verifyAge');
// })

// router.post('/verifyAge', (req, res) => {
//     const { ageGroup } = req.body;

//     if (ageGroup === 'true') {
//         res.render('home');
//     } else {
//         return res.render('verifyAge');
//     }
// })

// router.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     res.send(email + ' logged in. Password: ' + password);
// })

// router.get('/signup', (req, res) => {
//     res.render('signup');
// })

// router.post('/signup', (req, res) => {
//     const { fname, lname, username, password } = req.body;

//     res.send(`First name : ${fname} <br>
//                 Last name : ${lname} <br>
//                 Username : ${username} <br>
//                 Password : ${password}`);
// })
// module.exports = router;

const express = require('express');
const router = new express.Router();
const strain = require('../../models/strain');
const review = require('../../models/review')

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

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    res.send(email + ' logged in. Password: ' + password);
})

router.get('/signup', (req, res) => {
    res.render('signup');
})

router.post('/signup', (req, res) => {
    const { fname, lname, username, password } = req.body;

    res.send(`First name : ${fname} <br>
                Last name : ${lname} <br>
                Username : ${username} <br>
                Password : ${password}`);
})



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
        id: req.params.id,
      },
    })
    .then((strain) => res.json(strain))
    .catch((error) => res.status(400).json(error))
  });



module.exports = router;

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

// post review
// todo debug
router.post('/post-review', (req, res) => {
    try {
        const { user_id, content, rating, strain_id, title, timestamp } = req.body;

    res.send(`${title} <br>
        ${rating} <br>
        ${strain_id} <br>
        ${content}
        ${user_id}
        ${timestamp}`
    );
} catch (err) {
    res.status(400).json(err)
}
});

// router.post('/signup', (req, res) => {
//     const { fname, lname, username, password } = req.body;

//     res.send(`First name : ${fname} <br>
//                 Last name : ${lname} <br>
//                 Username : ${username} <br>
//                 Password : ${password}`);
// })