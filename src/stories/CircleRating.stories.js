import React from 'react';
import CircleRating from '../components/CircleRating';

export default {
  title: 'Circle Rating',
  component: CircleRating
};

export const CircleRatingStorybook = () => <CircleRating />;

CircleRatingStorybook.story = {
  name: 'CircleRating Standard'
};
