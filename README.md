
## Installation and Running

1. Clone the repository to your local machine:
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

## Features

- Display movie details
- Display movie cast information
- Display movie reviews
- Add and remove favorite movies
- Add and remove must-watch movies
- Write movie reviews

## Main Tech Stack

- React
- Material-UI
- React Router
- React Query

## File Descriptions

- `src/api/tmdb-api.js`: Interactions with the TMDB API
- `src/components/movieDetails/index.js`: Movie details component
- `src/components/cardIcons/addToFavorites.js`: Icon component for adding to favorites
- `src/components/cardIcons/removeFromFavorites.js`: Icon component for removing from favorites
- `src/components/cardIcons/addToMustWatch.js`: Icon component for adding to must-watch
- `src/components/cardIcons/removeFromMustWatch.js`: Icon component for removing from must-watch
- `src/components/cardIcons/writeReview.js`: Icon component for writing a review
- `src/components/reviewForm/index.js`: Review form component
- `src/contexts/moviesContext.js`: Movie context management
- `src/hooks/useMovie.js`: Custom hook for fetching movie data
- `src/pages/homePage.js`: Home page component
- `src/pages/movieDetailsPage.js`: Movie details page component
- `src/pages/favoriteMoviesPage.js`: Favorite movies page component
- `src/pages/mustWatchMoviesPage.js`: Must-watch movies page component
- `src/pages/upcomingMoviesPage.js`: Upcoming movies page component
- `src/pages/popularMoviesPage.js`: Popular movies page component
- `src/pages/trendingMoviesPage.js`: Trending movies page component
- `src/pages/movieReviewPage.js`: Movie review page component
- `src/pages/addMovieReviewPage.js`: Add movie review page component
- `src/pages/castDetailsPage.js`: Cast details page component
- `src/pages/movieRecommendationPage.js`: Movie recommendation page component

