import React, { MouseEvent, useState } from 'react';
import { Stack } from '@chakra-ui/react';

import { INoteData } from '../types';
import NoteBody from './NoteBody';
import { useNote } from '../context/ThreadHooks';
import NoteFooter from './NoteFooter';

// interface NoteEditState {
//   inEdit: boolean;
//   toggleEdit: () => void;
// }

// export const NoteEditContext = createContext<NoteEditState | null>(null);

export default function Note({
  id,
  hasFocus = false,
  getFocus
}: INoteProps): JSX.Element {
  const { note, addTag, deleteNote, editNote, removeTag } = useNote(id);
  const [innerContent, setInnerContent] = useState(note.content);
  const [inEdit, shouldEdit] = useState(false);

  const onEdit = () => {
    if (inEdit) {
      editNote(innerContent);
      shouldEdit(false);
    } else shouldEdit(true);
  };

  return (
    <Stack
      width="70%"
      spacing='0'
      p={1}
      borderRadius="0.5rem"
      bgColor="secondary"
      onClick={(ev: MouseEvent) => {
        ev.stopPropagation();
        if (!hasFocus) getFocus(id);
      }}
    >
      <NoteBody content={innerContent} onContentChange={setInnerContent} inEdit={inEdit} />
      {hasFocus ?
        <NoteFooter
          tags={note.tags} time={note.time}
          onDelete={deleteNote} onTagAdd={addTag}
          onTagDelete={removeTag} onEdit={onEdit}
        /> :
        null
      }
    </Stack>
  );
}

export interface INoteProps {
  id: INoteData['id'],
  /** denotes if note should be focused on */
  hasFocus?: boolean;
  /** function to get focus */
  getFocus: (id: INoteData['id']) => void;
}
