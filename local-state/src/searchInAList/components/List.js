import React from 'react';
import { arrayOf, shape, number, string } from 'prop-types';

const List = ({ list }) => (
  <ul>
    {list.map(item => (
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

List.propTypes = {
  list: arrayOf(shape({
    id: number,
    name: string,
  })).isRequired,
};

export default List;
