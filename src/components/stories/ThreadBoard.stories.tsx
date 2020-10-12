import React from 'react';

import ThreadBoard, { IThreadBoardProps } from '../ThreadBoard';
import data from '../../assets/fake/data.json';
import { IStory } from '../../types';

export default {
  title: 'Core/Thread Board',
  component: ThreadBoard
};

const Template: IStory<IThreadBoardProps> = args => <ThreadBoard {...args} />;

export const Default = Template.bind({});
Default.args = {
  thread: data
};