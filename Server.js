const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));

require('./routes')(app);

// Serving static files
app.use('/public', express.static('uploads'));


// Starting server
app.listen(3000, () => {
	console.log("App is running on port 3000");
})