/* 
Define the schema to be used to store images
in the databse. 
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// we store the image as a String path, 
// in an actual deployment we would store whole 
// images in the database, or better we would store paths
// and host images in a filestore accessible to the server
const imageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    tags:{
        type: String, 
        required: true
    },
    img:{
        type: String,
        required: true
    }
})


const Image = mongoose.model('Image', imageSchema);

module.exports = Image