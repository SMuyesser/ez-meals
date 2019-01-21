const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));
	// any route will load index.html fild
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
};

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));