import React from 'react';
import NoteFooter from '../NoteFooter';

export default {
  title: 'Core/Note Footer',
  component: NoteFooter
};

const Template = args => <NoteFooter {...args} />;

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

export const InEditMode = Template.bind({});
InEditMode.args = {
  ...Default.args,
  inEdit: true
};