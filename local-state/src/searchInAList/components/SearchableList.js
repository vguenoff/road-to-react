import React, { Component } from 'react';
import { arrayOf, shape, number, string } from 'prop-types';

import Search from './Search';
import ArchivableList from './ArchivableList';

class SearchableList extends Component {
  state = {
    query: '',
  }

  onChange = e => this.setState({ query: e.target.value });

  filterByQuery = query => item =>
    !query || item.name.toLowerCase().includes(query.toLowerCase());

  render() {
    const { query } = this.state;
    const { list } = this.props;

    const filteredList = list
      .filter(this.filterByQuery(query));

    return (
      <div>
        <Search
          query={query}
          onChange={this.onChange}
        >
          Search List:
        </Search>
        <ArchivableList list={filteredList} />
      </div>
    );
  }
}

SearchableList.propTypes = {
  list: arrayOf(shape({
    id: number,
    name: string,
  })).isRequired,
};

export default SearchableList;
