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
const strain = require('../models/strain');

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

// get review by ID

// post review

