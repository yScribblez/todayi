import React, { useState } from 'react';

// import PropTypes from 'prop-types';
import { Grid, Container, Transition, Icon } from 'semantic-ui-react';

import LogJournal from '../components/LogJournal';
import LogJournalMenu from '../components/LogJournalMenu';

const date = new Date();
const diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
const initialDate = new Date(date.setDate(diff));

const getWeekBefore = s => {
  const p = new Date(s);
  p.setDate(s.getDate() - 7);
  return p;
};

const getWeekAfter = s => {
  const p = new Date(s);
  p.setDate(s.getDate() + 7);
  return p;
};

const LogJournalViewport = () => {
  const [active, setActive] = useState(false);
  const [activeDate, setActiveDate] = useState(initialDate);
  const [activeMenuItem, setActiveMenuItem] = useState('week');

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={1} textAlign={'right'}>
          <Icon
            link
            name="calendar"
            onClick={() => setActive(isActive => !isActive)}
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Transition.Group animation={'fade right'} duration={500}>
            {active && (
              <Container>
                <LogJournalMenu
                  activeMenuItem={activeMenuItem}
                  setActiveMenuItem={setActiveMenuItem}
                />
              </Container>
            )}
          </Transition.Group>
        </Grid.Column>
        <Grid.Column width={5} />
        <Grid.Column width={1} textAlign={'right'}>
          <Icon
            link
            onClick={() => setActiveDate(prevDate => getWeekBefore(prevDate))}
            name="chevron circle left"
          />
        </Grid.Column>
        <Grid.Column width={1} textAlign={'right'}>
          <Icon
            link
            onClick={() => setActiveDate(prevDate => getWeekAfter(prevDate))}
            name="chevron circle right"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ padding: '0px' }}>
        <Grid.Column>
          <LogJournal startingDate={activeDate} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

LogJournalViewport.propTypes = {
  /**
   * temp
   */
};

LogJournalViewport.defaultProps = {
  /**
   * temp
   */
};

export default LogJournalViewport;
