import React from 'react';
import { DateTime } from 'luxon';

import Thread, { IThreadProps } from '../Thread';
import { IStory } from '../../types';

export default {
  title: 'Core/Thread',
  component: Thread
};

const Template: IStory<IThreadProps> = args => <Thread {...args} />;

export const Default = Template.bind({});

export const WithDate = Template.bind({});
WithDate.args = {
  date: DateTime.local().toISO()
};