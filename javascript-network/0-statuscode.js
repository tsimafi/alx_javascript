#!/usr/bin/node
const request = require('request');

// Retrieve the URL from the command line argument
const url = process.argv[2];

// Make the GET request
request.get(url, (error, response) => {
    if (error) {
        // Handle error if request fails
        console.error(error);
    } else {
        // Print the status code
        console.log(`code: ${response.statusCode}`);
    }
});
