import React, { useState } from 'react';

// import PropTypes from 'prop-types';
import { Grid, Header, Icon } from 'semantic-ui-react';

import CircleRating from '../CircleRating';

const daysOfWeek = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday'
];

const zeroPad = (num, places) => String(num).padStart(places, '0');

const LogEntry = ({ date, entries }) => {
  const [rating, setRating] = useState(3);

  const month = zeroPad(date.getMonth() + 1, 2);
  const day = zeroPad(date.getDate(), 2);

  return (
    <Grid>
      <Grid.Column verticalAlign={'middle'} textAlign={'center'} width={3}>
        <Header as="h3" style={{ margin: '0em' }}>
          {daysOfWeek[date.getDay()]}
        </Header>
        <Header as="h1" color={'grey'} style={{ margin: '0em' }}>
          {`${month}/${day}`}
        </Header>
        <CircleRating currentRating={rating} setRating={setRating} scale={5} />
      </Grid.Column>
      <Grid.Column width={12}>
        {entries.map(entry => {
          return <p>{entry}</p>;
        })}
      </Grid.Column>
      <Grid.Column verticalAlign={'bottom'} textAlign={'center'} width={1}>
        <Icon link name="magnify" />
      </Grid.Column>
    </Grid>
  );
};

LogEntry.propTypes = {
  /**
   * temp
   */
};

LogEntry.defaultProps = {
  /**
   * temp
   */
};

export default LogEntry;
