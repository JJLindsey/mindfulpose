const { AuthenticationError } = require('apollo-server-express');
const { User, Category, Order, Meditations } = require('../models');
const { signToken } = require('../utils/auth');

//add a const for the users to be able to pay for there subscription. IE stripe

const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
        },
    }
}