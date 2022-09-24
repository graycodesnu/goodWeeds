const sequelize = require('../config/connection');
const { User, Strain, Review } = require('../models');

const userData = require('./userData.json');
const strainData = require('./strainData.json');
const reviewData = require('./reviewData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const strain of strainData) {
    await Strain.create({
      ...strain,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  const review = await Review.bulkCreate(reviewData, {
    individualHooks: true,
    returning: true,

  });
  process.exit(0);
};

seedDatabase();
