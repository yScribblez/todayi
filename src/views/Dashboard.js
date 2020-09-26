import React from 'react';

import { Grid } from 'semantic-ui-react';

import DefaultNavbar from '../components/DefaultNavbar';
import Journal from '../components/Journal';
import JournalCalendar from '../components/JournalCalendar';

const Dashboard = () => {
  return (
    <Grid>
      <Grid.Column>
        <Grid.Row style={{ margin: '0em 0em 1em' }}>
          <DefaultNavbar />
        </Grid.Row>
        <JournalCalendar />
      </Grid.Column>
    </Grid>
  );
};

export default Dashboard;
