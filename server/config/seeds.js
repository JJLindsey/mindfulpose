//seed a user, and seed a meditation library
const db = require('./connection');
const { User, Category, Meditations } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        {name: 'Mindfulness'},
        {name: 'Yoga Nidra'},
        {name: 'Artful Moments'}
    ]);

    console.log('categories seeded');

    await Meditations.deleteMany();

    const meditations = await Meditations.insertMany([
        {
            title: '3 Minute Mindful Breath',
            img: 'relax.jpg',
            recording: '3 min breath.mp3',
            description: 'This is a 3-minute mindfulness meditation',
            datePosted: Date,
            category: categories[0]._id
        }
    ]);
    console.log('You have seeded your meditations');

    await User.deleteMany();

    await User.create({
        firstName: 'Ryan',
        lastName: 'Blessing',
        email:'ryan@test.com',
        password: 'password'
    })

    console.log('users seeded')

    process.exit();
})