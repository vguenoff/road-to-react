import React from 'react';
import {
  shape,
  objectOf,
  string,
  number
} from 'prop-types';

import './Story.css';

const Story = ({ story, columns }) => {
  const {
    title,
    url,
    author,
    num_comments,
    points
  } = story;

  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>{author}</span>
      <span style={{ width: columns.comments.width }}>{num_comments}</span>
      <span style={{ width: columns.points.width }}>{points}</span>
      <span style={{ width: columns.archive.width }} />
    </div>
  );
};

Story.propTypes = {
  story: shape({
    title: string,
    url: string,
    author: string,
    num_comments: number,
    points: number,
    objectID: number,
  }).isRequired,
  columns: objectOf(
    objectOf(string)
  ).isRequired
};

export default Story;
