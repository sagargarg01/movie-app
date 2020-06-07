import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FROM_FAVOURITE, SET_SHOW_FAVOURITES } from '../actions';


const initialMoviesState = {
   list: [],
   favourites: [],
   showFavourites: false
}

export default function movies(state = initialMoviesState, action) {
   // if(action.type === ADD_MOVIES){
   //    return {
   //       ...state,
   //       list: action.movies
   //    }
   // }

   switch (action.type) {
      case ADD_MOVIES:
         return {
            ...state,
            list: action.movies
         }

      case ADD_FAVOURITE:
         return {
            ...state,
            favourites: [action.movies, ...state.favourites]
         }

      case REMOVE_FROM_FAVOURITE:
         const filteredArray = state.favourites.filter(
            movie => movie.Title !== action.movies.Title
         )
         return {
            ...state,
            favourites: filteredArray
         }

      case SET_SHOW_FAVOURITES:
         return {
            ...state,
            showFavourites: action.val
         }

      default: return state;
   }
}

