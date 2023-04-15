// Context API
// We can store/edit/update data from any component & and can access it in any of the component

import React, { createContext } from 'react'
import { useState } from 'react';

export const MovieContext = createContext();
const MovieProvider = ({children}) => {
    const [movie, setMovie] = useState({
        id:0,
        original_title:"",
        overview: "",
        backdrop_path: "",
        poster_path: "", 
});
  return <MovieContext.Provider value={{movie,setMovie}}> {children}</MovieContext.Provider>

}

export default MovieProvider