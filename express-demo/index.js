const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name:'course1'},
    { id: 2, name:'course2'},
    { id: 3, name:'course3'}
];

app.get('/', (req,res) => {
    res.send('Hello world!!!');
});

app.get('/api/courses', (req,res) => {
    res.send(courses);
});

// Handling Get Request - by parameter
app.get(`/api/courses/:id`,(req,res) => {
    const c = courses.find(course => course.id === parseInt(req.params.id));
    if (!c) res.status(404).send('The course with the given id was not found');
    res.send(c);
})

// Handling POST request
app.post('/api/courses', (req,res) => {
    const schema = {
        name : Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    if (result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})



app.put(`/api/courses/:id`,(req,res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Course is not present.');

    const schema = {
        name : Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    if (result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    course.name = req.body.name;
    res.send(course);
})



app.delete(`/api/courses/:id`, (req,res) => {
    // look up the course
    // Not exisiting, return 404
    const course = courses.find(course => course.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Course is not present');

    // Delete
    const index = courses.indexOf(course);
    courses.splice(index,1);
    
    res.send(course);
    // Return the same course
})



// SET PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));