const router = require('express').Router();
const { User } = require('../../models');


// POST login
// * /API/USERS/LOGIN
router.post('/login', async (req, res) => {
  // console.log(userName);
  try {
    const dbUserData = await User.findOne({
      where: {
        user_name: req.body.userName,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      // This is where we would need a username to be called 
      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;