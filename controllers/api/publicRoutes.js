const express = require('express');
const router = new express.Router();

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
module.exports = router;