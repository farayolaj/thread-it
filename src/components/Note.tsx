import React, { useState, createContext } from 'react';
import { Stack } from '@chakra-ui/core';

import { INoteData } from '../types';

interface NoteEditState {
  inEdit: boolean;
  toggleEdit: () => void;
}

export const NoteEditContext = createContext<NoteEditState | null>(null);

export default function Note({
  id,
  hasFocus = false,
  getFocus,
  children
}: INoteProps): JSX.Element {
  const [inEdit, shouldEdit] = useState(false);

  const toggleEdit = () => shouldEdit(!inEdit);

  return (
    <NoteEditContext.Provider value={{ inEdit, toggleEdit }}>
      <Stack
        width="70vw"
        spacing='0'
        p={1}
        bgColor="secondary"
        onClick={() => {
          if (!hasFocus) getFocus(id);
        }}
      >
        {children[0]}
        {hasFocus ?
          children[1] :
          null
        }
      </Stack>
    </NoteEditContext.Provider>
  );
}

export interface INoteProps {
  id: INoteData['id'],
  /** denotes if note should be focused on */
  hasFocus?: boolean;
  /** function to get focus */
  getFocus: (id: INoteData['id']) => void;
  children: React.ReactElement[]
}
