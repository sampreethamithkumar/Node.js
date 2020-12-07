const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const genres = [
    { id: 1, type: "Action"},
    { id: 2, type: "Thriller"},
    { id: 3, type: "Crime"}
];


// GET request for all the genres
app.get(`/api/genres`, (req,res) => {
    res.send(genres);
})

// GET request for the specifed genres
app.get(`/api/genres/:id`, (req,res) => {
    const genre = genres.find(genre => genre.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('Genre is not present.');

    res.send(genre);
})

// POST request to add new genres
app.post(`/api/genres/`, (req,res) => {
    const schema = Joi.object({
        type: Joi.string().min(3).max(30).required()
    })

    const { error }= schema.validate({type : req.body.type});
    if (error) return res.send(error.details[0].message);
    
    const genre = {
        id : genres.length + 1,
        type : req.body.type
    };

    genres.push(genre);
    res.send(genre);
})


// PUT request to the update the genre
app.put(`/api/genres/:id`, (req,res) => {
    const genre = genres.find(genre => genre.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('Genre is not present.');

    const schema = Joi.object({
        type: Joi.string().min(3).max(30).required()
    })

    const { error }= schema.validate({type : req.body.type});
    if (error) return res.send(error.details[0].message);
    
    genre.type = req.body.type;
    res.send(genre);
})

// DELETE request to delete the genre
app.delete(`/api/genres/:id`, (req,res) => {
    const genre = genres.find(genre => genre.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('Genre is not present.');

    const index = genres.indexOf(genre);
    genres.splice(index,1);
    res.send(genre);
})



// Listener
app.listen(3000,() => console.log('New connection at 3000....'))

