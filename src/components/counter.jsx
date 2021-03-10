import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count : 0,
    tags: []
  };

  // renderTags() {
  //   if(this.state.tags.length === 0) {
  //     return <h1>These are no tags</h1> ;
  //   }else {
  //     return <ul>{this.state.tags.map(tag => <li key = { tag } >{ tag }</li>)}</ul>;
  //   }
  // }

  handleIncrement () {
    console.log("Incremented", this);
  }

  render() {
        
    return (
      <div>
        <span className = {this.getBadgesClasses()}> {this.formatCount()}</span>
        <button onClick = {this.handleIncrement}
                className = "btn btn-secondary"
        >
          Increment
        </button>
      </div>
    )
  }
  getBadgesClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'secondary';
    return classes;
  }

  formatCount () {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

}
 
export default Counter;