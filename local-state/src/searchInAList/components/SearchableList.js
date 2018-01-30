import React, { Component } from 'react';
import { arrayOf, any } from 'prop-types';

import Search from './Search';
import List from './List';

class SearchableList extends Component {
  state = {
    query: ''
  }

  onChange = e => this.setState({ query: e.target.value });

  filterByQuery = query => item =>
    !query || item.name.toLowerCase().includes(query.toLowerCase());

  render() {
    const { query } = this.state;
    const { list } = this.props;

    return (
      <div>
        <Search
          query={query}
          onChange={this.onChange}
        >
          Search List:
        </Search>
        <List
          list={
            (list || []).filter(this.filterByQuery(query))
          }
        />
      </div>
    );
  }
}

SearchableList.propTypes = {
  list: arrayOf(any).isRequired
};

export default SearchableList;
