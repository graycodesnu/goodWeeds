// const { Model } = require('sequelize');
// const router = require('express').Router();
// const { Review } = require("../../models");

// // GET all reviews
// //* API/REVIEWS/REVIEWS
// router.get("/", async (req, res) => {
//   Review.findAll({
//     attributes: [
//       'id',
//       'title',
//       'rating',
//       'strain_id',
//       'content',
//       'user_id',
//       'timestamp'
//     ],
//   })
//     .then(reviewData => {
//       const reviews = reviewData.map(review => review.get({ plain: true }));
//       res.render('allReviews', {
//         reviews
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// module.exports = router;