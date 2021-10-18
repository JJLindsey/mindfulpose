const mongoose = require('mongoose');

const { Schema } = mongoose;

const meditationSchema = new Schema({
    title: {
        type: String,
        require: true,
        trim: true
    },
    author: {
        type: String,
        require: true
    },
    img: {
        type: String
    },
    recording: {
        type: Schema.Types.Mixed
    },
    description: {
        type: String,
        require: true
    },
    datePosted: {
        type: Schema.Types.Date
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        require: true
    }
    //add comments/likes definition
})

const Meditations = mongoose.model('Meditation', meditationSchema);

module.exports = Meditations;