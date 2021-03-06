// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Counters from './components/counters';
import React, { Component } from 'react';

class App extends Component {
  state = { 
    counters: [
      {id:1, value:0},
      {id:2, value:0},
      {id:3, value:0},
      {id:4, value:0}
    ]
   };

   constructor () {
     super();
     console.log("Constructor - rendered ");
   }

   componentDidMount () {
     console.log("App - Mounted");
   }

   handleReset = () => {
      const counters = this.state.counters.map((c) => {
        c.value = 0;
        return c;
      })
      this.setState({ counters });
   }

   handleIncrement = (counter) => {
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index] = { ...counter};
     counters[index].value++;
     this.setState({ counters });
   }

   handleDelete = (counterId) => {
    const counters = this.state.counters.filter((counter) => {
      return counter.id !== counterId
    })

    this.setState({ counters });
  }


  render () {

    console.log("App - rendered ");

    return (
      <div>
      <Navbar 
        totalCounters = {this.state.counters.filter(c => c.value > 0).length}
      />
        <main className = "container">
          <Counters 
          counters = { this.state.counters }
          onReset = {this.handleReset}
          onIncrement = {this.handleIncrement}
          onDelete = {this.handleDelete}
          />
        </main>
      </div>
    )
  }
}

export default App;
