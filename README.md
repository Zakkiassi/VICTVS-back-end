## Overview

The goal of this project is to build a backend API that consumes a JSON file and exposes the data in a way that can be used by the application. The API should provide endpoints that allow the application to retrieve, filter and sort the data.

## Requirements

The API should be built using a backend framework such as Node.js with Express, Ruby on Rails, or Django.

The API should consume the data from a JSON file provided.

The API should provide endpoints for the application to retrieve, filter and sort the data.

Endpoints should be secure, require authentication, and handle errors and exceptions gracefully.

## Data Format

The JSON file provided contains an array of objects, where each object represents a record of data. Each record contains the following fields:

id (integer): A unique identifier for the record.
date (string): A date in the format "dd/mm/yyyy hh:mm".
location (string): The location where the exam was taken.
candidate (string): The name of the candidate who took the exam.
score (integer): The score achieved by the candidate.

## API Endpoints

The following endpoints should be provided by the API:

GET data/candidates/:title" Retrieves all candidates by a specific title

GET data/candidates Retrieves all candidates

## Conclusion

By following these requirements and implementing the endpoints specified above, you should be able to build a backend API that can consume the provided data and provide the necessary functionality to support the frontend application.
