# Assignment 1 - ReactJS app.

Name: [Qingxiang Shiqi]

## Overview

This is a movie enthusiast application where users can view movie details, cast and crew information, actor details, movie reviews, and add movies to their favorites or must-watch lists.

### Features

+ Display movie details
+ Display cast and crew information
+ Add and remove must-watch movies, and review functionality
+ Add filters similar to the main page on new dynamic pages for searching and filtering
+ Forward and backward controls work on all pages
+ Actor information page and movie information page can link to each other

## Setup requirements

1. Clone this repository to your local machine:
    ```sh
    git clone <repository-url>
    ```

2. Navigate to the project directory:
    ```sh
    cd movies
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

4. Run the project:
    ```sh
    npm start
    ```

## API endpoints

+ https://api.themoviedb.org/3/movie/popular - Popular movies
+ https://api.themoviedb.org/3/trending/movie/day - Trending movies

## Routing

+ /credit/movie_id - Displays movie cast and crew page
+ /recommendation/movie_id - Displays recommendation information page
+ /person/person_id - Displays actor information page
+ /movies/popular - Popular movies
+ /movies/trending - Trending movies
+ /movies/mustWatch - Must-watch movies

## Independent learning (If relevant)

In this project, I independently researched and adopted the following technologies/techniques:

+ Using `react-router-dom` for routing management
+ Using `@mui/material` for UI component development