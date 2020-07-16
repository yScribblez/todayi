import React from 'react';

import { Grid } from 'semantic-ui-react';

import DefaultNavbar from '../components/DefaultNavbar';
import Journal from '../components/Journal';

const Dashboard = () => {
  return (
    <Grid>
      <Grid.Column>
        <Grid.Row style={{margin: "0em 0em 1em"}}>
          <DefaultNavbar />
        </Grid.Row>
        <Journal />
      </Grid.Column>
    </Grid>
  );
};

export default Dashboard;
