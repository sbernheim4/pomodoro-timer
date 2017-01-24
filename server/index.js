'use strict';
const path = require('path');
const express = require('express');
const app = express();
const port = 1337;
const bodyParser = require('body-parser');

// folder to serve public files --> css, img, etc
app.use(express.static(path.join(__dirname, 'public')));

/*
 * serve all the files in ../browser/ staticlly as well --> Needed since the
 * html template files must be served statically so that they can be accessed
 * by the browser as well on a GET request
 */
app.use(express.static(path.join(__dirname, '../browser')));

// For any get request return the index.html file
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, '/index.html'));
});

// Listen on the port for incoming requests
app.listen(port, function() {
	console.log('Listening to port:', port);
});
