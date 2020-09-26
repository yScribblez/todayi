import React from 'react';

// import PropTypes from 'prop-types';
import { Segment, Divider } from 'semantic-ui-react';

import LogEntry from '../components/entry/LogEntry';

const tempEntries = ['lorem ipsum', 'lorem ipsum', 'lorem ipsum'];

const getDatesArray = function (s) {
  const e = new Date(s);
  e.setDate(s.getDate() + 7);
  for (var a = [], d = new Date(s); d <= e; d.setDate(d.getDate() + 1)) {
    a.push(new Date(d));
  }
  return a;
};

const LogJournal = ({ startingDate }) => {
  const dates = getDatesArray(startingDate);

  return (
    <Segment>
      <LogEntry date={startingDate} entries={tempEntries} />
      <Divider />
      <LogEntry date={dates[1]} entries={tempEntries} />
      <Divider />
      <LogEntry date={dates[2]} entries={tempEntries} />
      <Divider />
      <LogEntry date={dates[3]} entries={tempEntries} />
      <Divider />
      <LogEntry date={dates[4]} entries={tempEntries} />
      <Divider />
      <LogEntry date={dates[5]} entries={tempEntries} />
      <Divider />
      <LogEntry date={dates[6]} entries={tempEntries} />
    </Segment>
  );
};

LogJournal.propTypes = {
  /**
   * temp
   */
};

LogJournal.defaultProps = {
  /**
   * temp
   */
};

export default LogJournal;
