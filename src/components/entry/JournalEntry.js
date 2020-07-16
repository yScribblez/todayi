import React, { useState } from 'react';

import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Grid, List, Header, Input, Modal, Rating } from 'semantic-ui-react';

const JournalEntry = ({ open, date, items, onClose, tag }) => {
  const [inputValue, setInputValue] = useState('');
  const [entryItems, setEntryItems] = useState(items);

  const addEntryItem = (itemHeader, itemDescription) => {
    const newEntryItems = [
      ...entryItems,
      { header: itemHeader, description: itemDescription }
    ];
    setEntryItems(newEntryItems);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>
        <Grid>
          <Grid.Column centered="true" floated="left" width={6}>
            <div>{date}</div>
          </Grid.Column>
          <Grid.Column centered="true" floated="right" width={2}>
            <Rating
              icon="star"
              defaultRating={3}
              maxRating={5}
              style={{ outline: 0 }}
            />
          </Grid.Column>
        </Grid>
      </Modal.Header>
      <Modal.Content>
        <Grid columns="equal">
          <Grid.Column>
            <Modal.Description>
              <Header>today i...</Header>
              <List>
                {entryItems.map(item => (
                  <List.Item key={shortid.generate()}>
                    <List.Icon name={tag} />
                    <List.Content>
                      <List.Header>{item.header}</List.Header>
                      <List.Description>{item.description}</List.Description>
                    </List.Content>
                  </List.Item>
                ))}
              </List>
              <Input
                icon={tag}
                iconPosition="left"
                action={{
                  color: 'black',
                  labelPosition: 'right',
                  icon: 'plus',
                  content: 'Add Item',
                  onClick: () => {
                    addEntryItem(inputValue, '');
                    setInputValue('');
                  }
                }}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Enter Item"
              />
            </Modal.Description>
          </Grid.Column>
        </Grid>
      </Modal.Content>
    </Modal>
  );
};

JournalEntry.propTypes = {
  /**
   * boolean used to control the state of JournalEntry (open or closed)
   */
  open: PropTypes.bool.isRequired,
  /**
   * date field that is displayed on the header (and used to fetch items)
   */
  date: PropTypes.string.isRequired,
  /**
   * array of entry items to display in the modal
   */
  items: PropTypes.arrayOf(
    PropTypes.exact({
      header: PropTypes.string,
      description: PropTypes.string
    })
  ).isRequired,
  /**
   * function to run when close event occurs
   */
  onClose: PropTypes.func,
  /**
   * optional tag to be rendered for each item
   */
  tag: PropTypes.string
};

JournalEntry.defaultProps = {
  tag: 'tag',
  onClose: undefined
};

export default JournalEntry;
