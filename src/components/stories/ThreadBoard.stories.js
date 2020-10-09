import React from 'react';

import ThreadBoard from '../ThreadBoard';
import data from '../../assets/fake/data.json';

export default {
  title: 'Core/Thread Board',
  component: ThreadBoard
};

const Template = args => <ThreadBoard {...args} />;

export const Default = Template.bind({});
Default.args = {
  thread: data
};