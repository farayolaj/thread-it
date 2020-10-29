import React from 'react';

import { IStory } from '../../types';
import NoteBody, { INoteBodyProps } from '../NoteBody';

export default {
  component: NoteBody,
  title: 'Core/Note Body'
};

const Template: IStory<INoteBodyProps> = args => <NoteBody {...args} />;

export const Default = Template.bind({});
Default.args = {
  content:
    `It is pertinent that we know what is going on, as Nigerians.
      
      We must be ready to fight for our rights.`,
  onContentChange: () => {return;}
};

export const InEditMode = Template.bind({});
InEditMode.args = {
  ...Default.args,
  inEdit: true
};