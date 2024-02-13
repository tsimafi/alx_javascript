#!/usr/bin/node
const request = require('request');

// Retrieve the API URL from the command line argument
const apiUrl = process.argv[2];

// Initialize an object to store the counts of completed tasks by user ID
const completedTasksByUser = {};

// Make the GET request to the API URL
request.get(apiUrl, (error, response, body) => {
    if (error) {
        // Handle error if request fails
        console.error(error);
    } else {
        // Parse the JSON response body
        const todos = JSON.parse(body);

        // Iterate through the todos
        todos.forEach(todo => {
            // Check if the task is completed (completed === true)
            if (todo.completed) {
                // Increment the count of completed tasks for the user ID
                if (completedTasksByUser[todo.userId]) {
                    completedTasksByUser[todo.userId]++;
                } else {
                    completedTasksByUser[todo.userId] = 1;
                }
            }
        });

        // Print the counts of completed tasks by user ID
        console.log(completedTasksByUser);
    }
});
