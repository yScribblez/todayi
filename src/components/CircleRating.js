import React from 'react';
import shortid from 'shortid';
import { Icon } from 'semantic-ui-react';

import '../styles/CircleRating.css';

const CircleRating = ({ currentRating, setRating, scale }) => {
  const ratingIcons = () => {
    const icons = [];
    for (let rating = 1; rating <= scale; rating++) {
      const filled = rating <= currentRating;
      filled
        ? icons.push(
            <Icon
              className="circle clickable"
              key={shortid.generate()}
              name="circle"
              onClick={() => setRating(rating)}
            />
          )
        : icons.push(
            <Icon
              className="circle clickable"
              key={shortid.generate()}
              name="circle outline"
              onClick={() => setRating(rating)}
            />
          );
    }
    return icons;
  };

  return <div>{ratingIcons()}</div>;
};

export default CircleRating;
