import React, { useState } from 'react';
import { DateInput } from 'semantic-ui-calendar-react';
import { Grid } from 'semantic-ui-react';

const JournalCalendar = () => {
  const [value, setValue] = useState('');

  return (
    <Grid centered>
      <Grid.Column width={8}>
        <DateInput
          inline
          className="example-calendar-input"
          value={value}
          name="date"
          onChange={(event, { name, value }) =>
            console.log(
              new Date(
                value.split('-')[2],
                value.split('-')[1] - 1,
                value.split('-')[0]
              )
            )
          }
          marked={[new Date()]}
          markColor="grey"
        />
      </Grid.Column>
    </Grid>
  );
};

export default JournalCalendar;
