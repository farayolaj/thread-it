import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/core';
import groupBy from 'lodash.groupby';
import { DateTime } from 'luxon';

import Note from './Note';
import Thread, { IThreadProps } from './Thread';
import { INoteData } from '../types';
import NoteBody from './NoteBody';
import NoteFooter from './NoteFooter';


export default function ThreadBoard({ thread }: IThreadBoardProps): JSX.Element {
  const [focus, setFocus] = useState('');
  const groupedThread = groupBy(
    thread,
    note => DateTime.fromMillis(note.time).startOf('day')
  );

  return (
    <Flex w="100%" overflowY="auto" direction="column" alignItems="center" py={3}>
      <Hanger />
      {Object.entries(groupedThread).map(([date, notes]) =>
        <ThreadGroup key={date} date={date} notes={notes} focus={focus} getFocus={setFocus} />)}
    </Flex>
  );
}

export interface IThreadBoardProps {
  thread: INoteData[];
}

/**
 * 
 * @param {{date: string, notes: object[], focus: boolean, getFocus: function}} param0 
 */
function ThreadGroup({ date, notes, focus, getFocus }: IThreadGroupProps) {
  return (
    <>
      {notes.map((note, index) => (
        <React.Fragment key={note.id}>
          <Thread date={index === 0 ? date : undefined} onClick={() => getFocus('')}/>
          <Note id={note.id} hasFocus={focus === note.id} getFocus={getFocus}>
            <NoteBody content={note.content} />
            <NoteFooter
              tags={note.tags}
              time={note.time}
            // onTagAdd={() => {}}
            // onDelete={() => {}} 
            />
          </Note>
        </React.Fragment>
      ))}
    </>
  );
}

interface IThreadGroupProps {
  date: IThreadProps['date'];
  notes: INoteData[];
  focus: string;
  getFocus: (id: INoteData['id']) => void;
}

/**
 * 
 * @param {{ tag: string }} tag currently focused tag
 */
function Hanger({ tag = 'all' }: IHangerProps) {
  return (
    <Box w="80vw" p={1} bgColor="primary" color="white">
      <Text fontSize="sm" textAlign="center"><strong>{tag.toUpperCase()}</strong></Text>
    </Box>
  );
}

interface IHangerProps {
  tag?: string;
}