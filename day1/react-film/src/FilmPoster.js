import React, { Component } from 'react';

class FilmPoster extends Component {
    render() {
        const prefixURL = "https://image.tmdb.org/t/p/w780/";
        const posterUrl = prefixURL+this.props.film.poster_path;
        
        return (
            <img src={posterUrl} alt="" />
        );
  }
}

export default FilmPoster;