const sequelize = require('../config/connection');
const { User, Strain } = require('../models');

const userData = require('./userData.json');
const strainData = require('./strainData.json');

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

  process.exit(0);
};

seedDatabase();
