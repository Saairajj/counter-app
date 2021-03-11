import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies';



class App extends Component {
  // state = {
  //   movies : getMovies(),
  //   count : 9
  // }

  // handleDeletion = () => {
  //   this.setState({ count : this.state.count - 1})
  // }



  render() { 
    return ( 

      <main className = 'container' >
        <Movies />
      </main>

        // <main className = "container">
        // {this.state.count !==0 &&  `Showing ${this.state.count} movies in the database`}
       


      // </main>
     );
  }
}
 

export default App;
