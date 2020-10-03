import React from 'react';
import NoteFooter from '../NoteFooter';

export default {
  title: 'New Note Footer',
  component: NoteFooter
};

const Template = args => <NoteFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: ['main', 'nationality']
};

export const DefaultWithLongList = Template.bind({});
DefaultWithLongList.args = {
  tags: ['main', 'colours', 'body', 'format', 'todo']
};

export const InEditMode = Template.bind({});
InEditMode.args = {
  ...Default.args,
  inEdit: true
};