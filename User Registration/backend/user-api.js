const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4000;

// Where we will keep books
let users = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/status", (request, response) => {
    const status = {
       "Status": "Running"
    };
    response.send(status);
    console.log("get request -  ${port}!")
 });

app.post('/userRegistration', (req, res) => {    
    const user = req.body;

    // Output the book to the console for debugging
    const status = {
        "Status": "Running post"
    };
    console.log(user);
    users.push(user);

    res.send('user is added to the database');});

app.listen(port, () => console.log("Hello world app listening on port ${port}!"));