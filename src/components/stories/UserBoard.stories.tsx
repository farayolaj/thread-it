import React from 'react';
import { IStory } from '../../types';

import UserBoard, { IUserBoardProps } from '../UserBoard';

export default {
  title: 'Core/User Board',
  component: UserBoard
};

const Template: IStory<IUserBoardProps> = args => <UserBoard {...args} />;

export const UserLoggedIn = Template.bind({});
UserLoggedIn.args = {
  user: {
    id: '1',
    lastName: 'John',
    firstName: 'Doe',
    profilePic: ''
  }
};

export const UserLoggedOut = Template.bind({});
UserLoggedOut.args = {
  user: null
};
