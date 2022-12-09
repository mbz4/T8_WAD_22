const express = require('express');
const pool = require('./database');
const cors = require('cors')
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

//The express.json() function is a built-in middleware function in Express. 
//It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

//"async and await make promises easier to write"
// async makes a function return a Promise
// The keyword async before a function makes the function return a promise.
// Syntax:  "async(req, res) => {}"
// await makes a function wait for a Promise
// The await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues
// Syntax:  "async(req, res) => {let value = await promise}"


// Task 1 - Handling POST requests - Create post requests
app.post('/api/posts', async(req, res) => {
    try {
        console.log("a post request has arrived");
        const post = req.body;
        const newpost = await pool.query(
            "INSERT INTO alltable(body) values ($1)    RETURNING*", [post.body]
            // $1, $2, $3 are mapped to the first, second and third element of the passed array (post.title, post.body, post.urllink)
            // The RETURNING keyword in PostgreSQL allows returning a value from the insert or update statement.
            // using "*" after the RETURNING keyword in PostgreSQL, will return everything
        );
        res.json(newpost);
    } catch (err) {
        console.error(err.message);
    }
}); 


// Task 2 - Handling GET – all request - Fetch all posts
app.get('/api/posts', async(req, res) => {
    try {
        console.log("get posts request has arrived");
        const posts = await pool.query(
            "SELECT * FROM alltable"
        );
        res.json(posts.rows);
    } catch (err) {
        console.error(err.message);
    }
});


// Task 3 - Handling GET requests with route parameter - fetch post based on id request
app.get('/api/posts/:id', async(req, res) => {
    try {
        console.log("get a post with route parameter  request has arrived");
        // The req.params property is an object containing properties mapped to the named route "parameters". 
        // For example, if you have the route /posts/:id, then the "id" property is available as req.params.id.
        const { id } = req.params; // assigning all route "parameters" to the id "object"
        const posts = await pool.query( // pool.query runs a single query on the database.
            //$1 is mapped to the first element of { id } (which is just the value of id). 
            "SELECT * FROM alltable WHERE id = $1", [id]
        );
        res.json(posts.rows[0]); // we already know that the row array contains a single element, and here we are trying to access it
        // The res.json() function sends a JSON response. 
        // This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using the JSON.stringify() method.
    } catch (err) {
        console.error(err.message);
    }
}); 

// Task 4 - Handling PUT requests - Update a post based on id
app.put('/api/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        console.log("update request has arrived");
        const updatepost = await pool.query(
            "UPDATE alltable SET (body) = ($2) WHERE id = $1", [id, post.body]
        );
        res.json(updatepost);
    } catch (err) {
        console.error(err.message);
    }
});



// Task 5 - Handling DELETE requests - Delete a post based on its id
app.delete('/api/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        //const post = req.body; // we do not need a body for a delete request
        console.log("delete a post request has arrived");
        const deletepost = await pool.query(
            "DELETE FROM alltable WHERE id = $1", [id]
        );
        res.json(deletepost);
    } catch (err) {
        console.error(err.message);
    }
}); 

// Task 6 - Handling POST requests - Create account requests
app.post('/api/account', async(req, res) => {
    try {
        console.log("a post request has arrived");
        const account = req.body;
        const newAccount = await pool.query(
            "INSERT INTO account(name, password) values ($1, $2)    RETURNING*", [account.name, account.password]
            // The RETURNING keyword in PostgreSQL allows returning a value from the insert or update statement.
            // using "*" after the RETURNING keyword in PostgreSQL, will return everything
        );
        res.json(newAccount);
    } catch (err) {
        console.error(err.message);
    }
}); 

// Task 7 - Handling GET – Fetch  passwords where mails = given
app.get('/api/account/:name', async(req, res) => {
    try {
        const { name } = req.params;
        console.log("get posts request has arrived");
        const account = await pool.query(
            "SELECT  'password' FROM account WHERE name = $1",[name]
        );
        res.json(account.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(port, () => {
    console.log("Server is listening to port " + port)
});