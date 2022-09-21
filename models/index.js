const User = require('./user');
const Review = require('./review');
const Favorites = require('./favorites');
const Strain = require('./strain');

User.hasMany(Favorites, {
    foreignKey: 'user_id'
});

Favorites.belongsTo(User, {
    foreignKey: 'user_id'
});

Strain.hasMany(Review, {
    foreignKey: 'strain_id'
});

User.hasMany(Review, {
    foreignKey: 'user_id'
});

Review.belongsTo(User, {
    foreignKey: 'user_id'
});

Review.belongsTo(Strain, {
    foreignKey: 'user_id'
})

User.belongsToMany(Strain, {
    through: {
        model:Favorites
    },
});

Strain.belongsToMany(User, {
    through: {
        model:Favorites
    },
});


module.exports = { User, Review, Favorites, Strain };

