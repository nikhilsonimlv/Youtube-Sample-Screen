import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: "",
  };


  
  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({
      term: event.target.value,
    });
  };

  onFormSubmit=(event) =>{
    event.preventDefault();
    this.props.submitTheTerm(this.state.term)
   // console.log(event.target.value);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Enter Your Search:-</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
