import React from 'react';
import Journal from '../components/Journal'

export default {
  title: 'Journal View',
  component: Journal,
};

export const JournalStorybook = () => <Journal />;

JournalStorybook.story = {
  name: 'Journal Default',
};
