import React from 'react';
import { IStory } from '../../types';

import UserBoard from '../UserBoard';

export default {
  title: 'Core/User Board',
  component: UserBoard
};

const Template: IStory<any> = args => <UserBoard {...args} />;

export const UserLoggedOut = Template.bind({});
