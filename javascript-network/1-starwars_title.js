#!/usr/bin/node
const request = require('request');

// Retrieve the movie ID from the command line argument
const movieId = process.argv[2];

// Construct the URL with the provided movie ID
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make the GET request to the Star Wars API
request.get(url, (error, response, body) => {
    if (error) {
        // Handle error if request fails
        console.error(error);
    } else {
        // Parse the JSON response body
        const film = JSON.parse(body);
        // Print the title of the movie
        console.log(film.title);
    }
});
