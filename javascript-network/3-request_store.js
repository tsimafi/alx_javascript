#!/usr/bin/node
const request = require('request');
const fs = require('fs');

// Retrieve the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Make the GET request to fetch the webpage content
request.get(url, (error, response, body) => {
    if (error) {
        // Handle error if request fails
        console.error(error);
    } else {
        // Write the content to the specified file path
        fs.writeFile(filePath, body, { encoding: 'utf-8' }, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`File "${filePath}" has been saved.`);
            }
        });
    }
});
