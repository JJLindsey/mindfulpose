// So people can see there subscription
const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
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

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;