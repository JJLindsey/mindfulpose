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
            title: 'Yoga Nidra for the beginner',
            img: '',
            recording: '',
            description: 'This is a beginners guide to Yoga Nidra',
            datePosted: Date,
            category: categories[1]._id
        }
    ]);
    console.log('You have seeded your meditations');

    await User.deleteMany();

    await User.create({
        firstName: 'Ryan',
        lastName: 'Blessing',
        email:'ryan@test.com',
        password: 'password',
        orders: [
            {
                meditations: [Meditations[0]._id]
            }
        ]
    })

    console.log('users seeded')

    process.exit();
})