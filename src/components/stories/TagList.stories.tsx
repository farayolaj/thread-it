import React from 'react';

import TagList from '../TagList';
import { IStory } from '../../types';

export default {
  title: 'Core/TagList',
  component: TagList
};

const Template: IStory<any> = args => <TagList {...args} />;

export const Default = Template.bind({});
