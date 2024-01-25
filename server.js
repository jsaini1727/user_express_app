const express = require('express');

const PORT = 3333;

const app = express();


const api_routes = require('./routes/api_routes');

// Opening up the middleware channel to allow json to be sent through from the client
app.use(express.json());

// Share or create a GET route for every file in the public folder
app.use(express.static('./public'));
// Get localhost:333/css/style.css
// Get localhost:333/index.html

// Load Routes
app.use('/api', api_routes);


app.listen(PORT, () => {
  console.log('Server started on port', PORT);
});