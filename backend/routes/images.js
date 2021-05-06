/* 
This file defines the routes where operations can be performed 
on images in the database. 

functionality:
- get all images
- search images by keyword in tags
- add image
- get specific image by object id
*/

// init the router and get the schema
const router = require('express').Router();
let Image = require('../models/image.model')


// get all images
router.route('/').get((req, res) => {
    Image.find()
        .then(images => res.json(images))
        .catch(err => res.status(400).json('Error: '+err))
})

// get images where a keyword is in the tags
router.route('/search/:keyword').get((req, res) =>{
    Image.find({
        "tags": {$regex: req.params.keyword.toLowerCase()}
    })
    .then(images => res.json(images))
    .catch(err => res.status(400).json('Error: '+err))
})

// add an image to the db
router.route('/add').post((req, res) => {
    const title = req.body.title;
    const tags = req.body.tags.toLowerCase();
    const img = req.body.img;

    const newImage = new Image({
        title, 
        tags,
        img
    });

    newImage.save()
})

// get specific image by id
router.route('/:id').get((req, res) => {
    Image.findById(req.params.id)
        .then(image => res.json(image))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;