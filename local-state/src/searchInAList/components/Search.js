import React, { Component } from 'react';

class Search extends Component {
  state = {
    query: ''
  }

  onChange = (e) => {
    const { value } = e.target;
    this.setState({ query: value });
  }

  render() {
    return (
      <div>
        {this.props.children}
        <input
          type="text"
          value={this.state.query}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Search;
