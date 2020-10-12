import React from 'react';

import { NoteEditContext } from '../Note';
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

const noteEdit = {
  inEdit: true,
  toggleEdit: function () {
    this.inEdit = !this.inEdit;
  }
};

export const InEditMode: IStory<INoteFooterProps> = args => (
  <NoteEditContext.Provider value={noteEdit} >
    <NoteFooter {...args} />
  </NoteEditContext.Provider>
);
InEditMode.args = {
  ...Default.args
};