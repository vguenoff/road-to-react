import React, { Component } from 'react';
import { arrayOf, any } from 'prop-types';

class List extends Component {
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

    return (
      <ul>
        {filteredList.map(item => (
          <li key={item.id}>
            <span>{item.name} | </span>
            <span>
              <button
                type="button"
                onClick={() => this.onArchive(item)}
              >
                Archive
              </button>
            </span>
          </li>
        ))}
      </ul>
    );
  }
}


List.propTypes = {
  list: arrayOf(any).isRequired,
};

export default List;
