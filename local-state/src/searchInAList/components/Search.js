import React from 'react';
import { string, func } from 'prop-types';

const Search = ({ children, query, onChange }) => (
  <div>
    {children}
    <input
      type="text"
      value={query}
      onChange={onChange}
    />
  </div>
);

Search.propTypes = {
  children: string.isRequired,
  query: string,
  onChange: func.isRequired,
};

Search.defaultProps = {
  query: '',
};

export default Search;
