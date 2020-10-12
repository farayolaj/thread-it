import React from 'react';

import { IStory } from '../../types';
import { NoteEditContext } from '../Note';
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
};

const editMode = {
  inEdit: true,
  toggleEdit: () => { return; }
};

export const InEditMode: IStory<INoteBodyProps> = args => (
  <NoteEditContext.Provider value={editMode}>
    <NoteBody {...args} />
  </NoteEditContext.Provider>
);
InEditMode.args = {
  content:
    `It is pertinent that we know what is going on, as Nigerians.
      
      We must be ready to fight for our rights.`,
};