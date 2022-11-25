const express = require('express');
const mongoose = require('mongoose');
const app = express();
const MONGO_DB_URL = 'mongodb+srv://mintu:mintu@cluster0.kfbchfa.mongodb.net/?retryWrites=true&w=majority';
PORT = 3000;

const connectToDB = async() => {
    mongoose.connect(MONGO_DB_URL,
    err => {
        if(err) throw err;
        console.log('connect to mongodb database');
    });
}



// Data Structure, save data in database
const playlistSchema = new mongoose.Schema({
    // name: {
    //     name: String,
    //     required: true,
    // },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type : Number,
        default: Date.now
    }

});

// collection creation
const Playlist = new mongoose.model("Playlist",playlistSchema );


app.listen(PORT, function() {
    console.log('Server running on port', PORT);
});