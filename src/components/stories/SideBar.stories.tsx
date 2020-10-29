import React from 'react';

import SideBar, { ISideBarProps } from '../SideBar';
import { IStory } from '../../types';

export default {
  title: 'Core/SideBar',
  component: SideBar
};

const Template: IStory<ISideBarProps> = args => (
  <SideBar {...args} />
);

export const Default = Template.bind({});
