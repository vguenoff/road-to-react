import React, { Component } from 'react';
import { arrayOf, shape, number, string } from 'prop-types';

import List from './List';

class ArchivableList extends Component {
  state = {
    archivedItems: [],
  }

  onArchive = (item) => {
    const { archivedItems } = this.state;

    this.setState({
      archivedItems: [
        ...archivedItems,
        item,
      ],
    });
  }

  filterByArchive = archivedItems => item => !archivedItems.includes(item);

  render() {
    const { archivedItems } = this.state;
    const { list } = this.props;

    const filteredList = list.filter(this.filterByArchive(archivedItems));

    return <List list={filteredList} />;
  }
}

ArchivableList.propTypes = {
  list: arrayOf(shape({
    id: number,
    name: string,
  })).isRequired,
};

export default ArchivableList;
