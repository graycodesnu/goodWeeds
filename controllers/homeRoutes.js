const router = require('express').Router();

// GET signup
router.get("/signup", (req, res) => {
  res.render("signup");
});

// GET logout
router.get("/logout", (req, res) => {
  res.render("verifyAge");
});


// GET login route
router.get("/login", (req, res) => {
  res.render("login");
});

// // GET myReviews
// router.get("/myReviews", (req, res) => {
//   res.render("myReviews");
// });

// GET verifyAge
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



module.exports = router;
