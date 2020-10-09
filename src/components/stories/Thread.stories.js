import React from 'react';
import { DateTime } from 'luxon';

import Thread from '../Thread';

export default {
  title: 'Core/Thread',
  component: Thread
};

const Template = args => <Thread {...args} />;

export const Default = Template.bind({});

export const WithDate = Template.bind({});
WithDate.args = {
  date: DateTime.local().toISO()
};