import React from 'react';

import ThreadBoard from '../ThreadBoard';
import { IStory } from '../../types';

export default {
  title: 'Core/Thread Board',
  component: ThreadBoard
};

const Template: IStory<any> = args => <ThreadBoard {...args} />;

export const Default = Template.bind({});