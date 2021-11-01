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

        //give the users subscription access to the meditation categories
        subscription: async (parent, { user }, context) => {
            if(context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'subscription.meditations',
                    populate: 'category'
                });

                return user.subscription.id(user);
            }

            throw new AuthenticationError('Not logged in!')
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user =await User.create(args);
            const token = signToken(user);

            return { token, user};
        }, 
        updateUser: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
      
            throw new AuthenticationError('Not logged in');
        },
        login: async(parent, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('incorrect Email!')
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError('Invalid Password')
            }

            const token = signToken(user);

            return { token, user };
        },
        addSubscription: async (_, { user }, context) => {
            
            if(context.meditations) {
                const subscription = new Subscription({ user });

                await User.findByIdAndUpdate(context.user._id, { $push: { subscription: subscription } });

                return subscription;
            }

            throw new AuthenticationError('Not logged in!');
        }
    }
}


    module.exports = resolvers;