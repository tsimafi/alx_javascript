#!/usr/bin/node
const request = require('request');

// Retrieve the Movie ID from the command line argument
const movieId = process.argv[2];

// Star Wars API URL for films
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

// Make a GET request to retrieve information about the specified movie
request.get(apiUrl, (error, response, body) => {
    if (error) {
        // Handle error if request fails
        console.error(error);
    } else {
        // Parse the JSON response body
        const movie = JSON.parse(body);
        // Extract characters from the movie
        const characters = movie.characters;
        // Iterate through the characters and print their names
        characters.forEach(characterUrl => {
            request.get(characterUrl, (error, response, body) => {
                if (error) {
                    console.error(error);
                } else {
                    const character = JSON.parse(body);
                    console.log(character.name);
                }
            });
        });
    }
});
