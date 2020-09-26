import React from 'react';
import { Grid } from 'semantic-ui-react';

import LogJournalViewport from '../components/LogJournalViewport';
import DefaultNavbar from '../components/DefaultNavbar';

const NewDashboard = () => {
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column style={{ margin: '0em' }}>
          <DefaultNavbar />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ margin: '0em 0em 0em 1em' }} width={8}>
          <LogJournalViewport />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default NewDashboard;
