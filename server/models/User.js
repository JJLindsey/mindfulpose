const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const bcrypt = require('bcrypt');
const { Order } = require('./Order');
const Meditations = require('./Meditations');


const userSchema = new Schema(
    {
        firstNAme: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        orders: {
            type: Schema.Types.Array
        }
    });

    // the ability to save and update said password
    userSchema.pre('save', async function (next) {
        if(this.isNew || this.isModified('password')) {
            const saltRounds = 10;
            this.password = await bcrypt.hash(this.password, saltRounds);
        }

        next();
    })

    //taking the password and compairing it to make sure that it is the correct password
    userSchema.methods.isCorrectPassword = async function (password) {
        return bcrypt.compare(password, this.password);
    };

    const User = mongoose.model('User', userSchema)

    module.exports = User;