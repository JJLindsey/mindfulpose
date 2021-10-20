// So people can see there subscription
const mongoose = require('mongoose');

const { Schema } = mongoose;

const subscriptionSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    meditations: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Meditations'
        }
    ]
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription