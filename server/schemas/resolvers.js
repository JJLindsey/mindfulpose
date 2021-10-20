const { AuthenticationError } = require('apollo-server-express');
const { User, Category, Subscription, Meditations } = require('../models');
const { signToken } = require('../utils/auth');

//add a const for the users to be able to pay for there subscription. IE stripe

const resolvers = {
    Query: {
        // to find all the categories IE. mindfullness, yoga nidra, artful moments
        categories: async () => {
            return await Category.find();
        },

        //to be able to find a user, and allow them access to any category, 
        user: async(parent, args, context) => {
            if(context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'subscription.meditations',
                    populate: 'category'
                });

                user.subscription.sort((a, b) => b.purchaseDate - a.purchaseDate);
                return user;
            }

            throw new AuthenticationError('Not Logged In, Please Log in to continue!')
        },
        
        //give  the user to find a specific video in the category
        meditation: async (parent, { _id }) => {
            return await Meditations.findById(_id).populate('category');
        },

        //returning all the videos within the category
        meditations: async (parent, {category, title}) => {
            const params = {};

            if( category ) {
                params.category = category;
            }

            if(title) {
                params.name = {
                    $regex: title
                };
            }
            return await Meditations.find(params).populate('category');
        },
    }
}


    module.exports = resolvers;