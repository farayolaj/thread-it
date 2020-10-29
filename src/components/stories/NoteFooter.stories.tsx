import React from 'react';

import NoteFooter, { INoteFooterProps } from '../NoteFooter';
import { IStory } from '../../types';

export default {
  title: 'Core/Note Footer',
  component: NoteFooter
};

const Template: IStory<INoteFooterProps> = args => <NoteFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: ['main', 'nationality'],
  time: 1601809200000
};

export const DefaultWithLongTags = Template.bind({});
DefaultWithLongTags.args = {
  ...Default.args,
  tags: ['main', 'colours', 'body', 'format', 'todo']
};
