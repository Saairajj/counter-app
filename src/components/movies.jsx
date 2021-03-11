import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Moviess extends Component {

  state = {
    movies:getMovies()
  }

  handleDeletion = (movie) => {
    // this.setState({ count : this.state.count - 1})
    console.log(movie);
  }

  render() { 
    return ( 

         <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            {this.state.movies.map((movie) => {
              return (
                    <tr>
                      <th scope ="row">{movie.title}</th>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td> <button onClick = {() => this.handleDeletion(movie)} className = "btn btn-danger" > Delete</button> </td>
                    </tr>
            
                )
              })
            } 
          </tbody>
  
        </table>      
    );

  }
}
 
export default Moviess ;