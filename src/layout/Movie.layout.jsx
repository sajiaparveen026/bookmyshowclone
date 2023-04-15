import React from 'react'
import MovieNavbar from '../components/Navbar/MovieNavbar.Component';
import Footer from '../components/Footer/Footer.Component';

const MovieLayoutHoc= (Component) =>
({...props})=> {
  return (
    <div>
      <MovieNavbar />
      <Component {...props} />
      <Footer/>
      </div>
  )
}

export default MovieLayoutHoc;