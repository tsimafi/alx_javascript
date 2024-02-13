#!/usr/bin/node
const request = require('request');

// Retrieve the API URL from the command line argument
const apiUrl = process.argv[2];

// Wedge Antilles character ID
const WEDGE_ANTILLES_ID = '18';

// Make the GET request to the Star Wars API
request.get(apiUrl, (error, response, body) => {
    if (error) {
        // Handle error if request fails
        console.error(error);
    } else {
        // Parse the JSON response body
        const films = JSON.parse(body).results;
        
        // Initialize a counter for movies with Wedge Antilles
        let movieCount = 0;

        // Iterate through the films to count occurrences of Wedge Antilles
        films.forEach(film => {
            if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${WEDGE_ANTILLES_ID}/`)) {
                movieCount++;
            }
        });

        // Print the number of movies where Wedge Antilles is present
        console.log(movieCount);
    }
});
