import React from 'react';
import {
  arrayOf,
  shape,
  string,
  number
} from 'prop-types';

import './Stories.css';
import Story from './Story';

const COLUMNS = {
  title: {
    label: 'Title',
    width: '40%'
  },
  author: {
    label: 'Author',
    width: '30%'
  },
  comments: {
    label: 'Comments',
    width: '10%'
  },
  points: {
    label: 'Points',
    width: '10%'
  },
  archive: {
    label: 'Archive',
    width: '10%'
  }
};

const Stories = ({ stories }) => (
  <div className="stories">
    {
      (stories || []).map(story =>
        <Story
          key={story.objectID}
          story={story}
          columns={COLUMNS}
        />
      )
    }
  </div>
);

Stories.propTypes = {
  stories: arrayOf(
    shape({
      title: string,
      url: string,
      author: string,
      num_comments: number,
      points: number,
      objectID: number,
    })
  ).isRequired,
};

export default Stories;
