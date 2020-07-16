import React from 'react';
import LogEntry from '../components/entry/LogEntry';

export default {
  title: 'LogEntry',
  component: LogEntry
};

export const LogEntryStorybook = () => <LogEntry date={new Date()}/>;

LogEntryStorybook.story = {
  name: 'Log Entry Storybook'
};
