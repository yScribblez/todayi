import React from 'react';

import PropTypes from 'prop-types';
import { Grid, Container } from 'semantic-ui-react';

import '../styles/LogJournalMenu.css';

const LogJournalMenu = ({ activeMenuItem, setActiveMenuItem }) => {
  return (
    <Grid columns={3}>
      <Grid.Column textAlign={'center'}>
        <Container
          className="menuItem"
          onClick={() => setActiveMenuItem('week')}
        >
          {activeMenuItem === 'week' ? '[ week ]' : 'week'}
        </Container>
      </Grid.Column>
      <Grid.Column textAlign={'center'}>
        <Container
          className="menuItem"
          onClick={() => setActiveMenuItem('month')}
        >
          {activeMenuItem === 'month' ? '[ month ]' : 'month'}
        </Container>
      </Grid.Column>
      <Grid.Column textAlign={'center'}>
        <Container
          className="menuItem"
          onClick={() => setActiveMenuItem('year')}
        >
          {activeMenuItem === 'year' ? '[ year ]' : 'year'}
        </Container>
      </Grid.Column>
    </Grid>
  );
};

LogJournalMenu.propTypes = {
  /**
   * activeMenuItem is the menu item currently selected
   */
  activeMenuItem: PropTypes.string.isRequired,
  /**
   * setActiveMenuItem is a function to set activeMenuItem on menuItem click
   */
  setActiveMenuItem: PropTypes.func.isRequired
};

export default LogJournalMenu;
