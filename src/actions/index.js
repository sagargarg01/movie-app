// action typess
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";
export const ADD_MOVIES_TO_LIST = "ADD_MOVIES_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT"

export function addMovies(movies) {
   return {
      type: ADD_MOVIES,
      movies: movies
   };
}

export function addFavourite(movies) {
   return {
      type: ADD_FAVOURITE,
      movies: movies
   };
}

export function removeFromFavourite(movies) {
   return {
      type: REMOVE_FROM_FAVOURITE,
      movies: movies
   };
}

export function setShowFavourite(val) {
   return {
      type: SET_SHOW_FAVOURITES,
      val 
   };
}

export function addMovieToList (movie){
   return {
      type: ADD_MOVIES_TO_LIST,
      movie
   }
}

export function handleMovieSearch (movie) {
   const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;

   return function (dispatch){
      fetch(url)
      .then(response => response.json())
      .then(movie => {
         console.log("movie",movie);
         //dispatch an action
         // dispatch ({type: 'ADD_SEARCH_RESULT', movie})
         dispatch(addMovieSearchResult(movie))
      })
   }
}

export function addMovieSearchResult(movie) {
   return{
      type: ADD_SEARCH_RESULT,
      movie
   }
}