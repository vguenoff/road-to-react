import React from 'react';
import { arrayOf, any } from 'prop-types';

const List = ({ list }) => (
  <ul>
    {
      list.map(item =>
        <li key={item.id}>{item.name}</li>)
    }
  </ul>
);

List.propTypes = {
  list: arrayOf(any).isRequired
};

export default List;
