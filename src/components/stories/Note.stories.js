import React from 'react';

import Note from '../Note';
import * as NoteFooterStories from './NoteFooter.stories';

export default {
  component: Note,
  title: 'Core/Note'
};

const Template = args => <Note {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    id: '1',
    content: 
      `It is pertinent that we know what is going on, as Nigerians.
      
      We must be ready to fight for our rights.`,
    tags: NoteFooterStories.Default.args.tags,
    time: NoteFooterStories.Default.args.time
  }
};

export const HasFocus = Template.bind({});
HasFocus.args = {
  ...Default.args,
  hasFocus: true
};

export const HasFocusWithLongTags = Template.bind({});
HasFocusWithLongTags.args = {
  ...HasFocus.args,
  data: {
    ...Default.args.data,
    tags: NoteFooterStories.DefaultWithLongTags.args.tags
  }
};