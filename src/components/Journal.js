import React, { useState } from 'react';

import CalendarHeatmap from 'react-calendar-heatmap';
import { Grid } from 'semantic-ui-react';

import 'react-calendar-heatmap/dist/styles.css';
import '../styles/Journal.css';

import JournalEntry from './entry/JournalEntry';

const items = [
  {
    header: 'Completed todayi',
    description: 'Finished the reactJS implementation of personal project.'
  },
  {
    header: 'Finished furniture shopping at Ikea',
    description: 'Bought small decor items as well as greenery.'
  }
];

/**
 * Journal renders the calendar with active logs
 */
const Journal = () => {
  const [startDate, setStartDate] = useState(new Date('2016-01-01'));
  const [endDate, setEndDate] = useState(new Date('2017-01-01'));
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDate, setModalDate] = useState(new Date());

  const getDateRange = (startDate, endDate) => {
    for (
      var dates = [], dt = new Date(startDate);
      dt < endDate;
      dt.setDate(dt.getDate() + 1)
    ) {
      dates.push({ date: new Date(dt), count: 1 });
    }

    return dates;
  };

  const onDateSelection = value => {
    if (value) {
      setModalDate(value.date);
      setModalOpen(true);
    }
  };

  return (
    <Grid centered>
      <Grid.Column width={14}>
        <CalendarHeatmap
          startDate={startDate}
          endDate={endDate}
          values={getDateRange(new Date(startDate), new Date(endDate))}
          onClick={value => onDateSelection(value)}
          classForValue={value => {
            if (!value) {
              return 'color-empty';
            }
            return `color-scale-${value.count}`;
          }}
        />
        <JournalEntry
          open={modalOpen}
          date={modalDate.toDateString()}
          items={items}
          onClose={() => setModalOpen(false)}
        />
      </Grid.Column>
    </Grid>
  );
};

export default Journal;
