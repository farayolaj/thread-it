import React from 'react';

import TagList, { ITagListProps } from '../TagList';
import { IStory } from '../../types';

export default {
  title: 'TagList',
  component: TagList
};

const Template: IStory<ITagListProps> = args => <TagList {...args} />;

export const ShortList = Template.bind({});
ShortList.args = {
  tags: ['science', 'politics', 'health']
};

export const LongList = Template.bind({});
LongList.args = {
  tags: ['science', 'politics', 'environment', 'justice', 'health', 'education', 'ict', 'security']
};