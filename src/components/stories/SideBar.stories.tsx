import React from 'react';

import SideBar, { ISideBarProps } from '../SideBar';
import { IStory, IUser } from '../../types';
import UserBoard from '../UserBoard';
import { UserLoggedIn } from './UserBoard.stories';
import TagList from '../TagList';
import { LongList } from './TagList.stories';

export default {
  title: 'SideBar',
  component: SideBar
};

const Template: IStory<ISideBarProps> = args => (
  <SideBar {...args}>
    <UserBoard user={UserLoggedIn.args?.user as IUser} />
    <TagList tags={LongList.args?.tags as string[]} />
  </SideBar>
);

export const DefaultWithLongTagList = Template.bind({});