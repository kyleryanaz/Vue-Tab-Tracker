const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Log Generator - Morgan
app.use(morgan('combined'));

// For parsing JSON data/requests
app.use(bodyParser.json());

// For allowing any host to hit server
app.use(cors());

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}!`
    })
})

app.listen(process.env.PORT || 8081)



