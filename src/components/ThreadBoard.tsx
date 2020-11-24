import React, { useEffect, useRef, useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import groupBy from 'lodash.groupby';
import { DateTime } from 'luxon';

import Note from './Note';
import Thread, { IThreadProps } from './Thread';
import { INoteData } from '../types';
import { useSelectedTag, useThreadEntities, useThreadIds } from '../context/ThreadHooks';
import { useUser } from '../context/AuthHooks';


export default function ThreadBoard(): JSX.Element {
  const { selectedTag } = useSelectedTag();
  const threadIds = useThreadIds();
  const threadEntities = useThreadEntities();
  const { isUserLoggedIn } = useUser();
  // filter functionality handled by firestore if user is signed in
  const filteredThreadIds = isUserLoggedIn ? threadIds : threadIds.filter(id => {
    if (!selectedTag || selectedTag === 'all') return threadIds;
    else return threadEntities[id].tags.includes(selectedTag);
  });
  const [focus, setFocus] = useState('');
  const lastElementRef = useRef<HTMLSpanElement>(null);
  const groupedThread = groupBy(
    filteredThreadIds,
    id => {
      const note = threadEntities[id];
      return DateTime.fromMillis(note.time).startOf('day');
    }
  );

  useEffect(() => {
    if (lastElementRef.current) lastElementRef.current.scrollIntoView();
  }, []);

  return (
    <Flex
      id="board"
      w="100%" h="100vh"
      overflowY="auto" direction="column"
      alignItems="center" py={3}
      onClick={() => setFocus('')}
    >
      <Hanger tag={selectedTag} />
      {Object.entries(groupedThread).map(([date, ids]) =>
        <ThreadGroup key={date} date={date} noteIds={ids} focus={focus} getFocus={setFocus} />)}
      <span ref={lastElementRef}></span>
    </Flex>
  );
}

/* export interface IThreadBoardProps {
  thread: INoteData[];
} */

function ThreadGroup({ date, noteIds, focus, getFocus }: IThreadGroupProps) {
  return (
    <>
      {noteIds.map((id, index) => (
        <React.Fragment key={id}>
          <Thread date={index === 0 ? date : undefined} />
          <Note id={id} hasFocus={focus === id} getFocus={getFocus} />
        </React.Fragment>
      ))}
    </>
  );
}

interface IThreadGroupProps {
  date: IThreadProps['date'];
  noteIds: string[];
  focus: string;
  getFocus: (id: INoteData['id']) => void;
}

/**
 * 
 * @param {{ tag: string }} tag currently focused tag
 */
function Hanger({ tag }: IHangerProps) {
  tag = tag ? tag : 'all';

  return (
    <Box w="80vw" p={1} bgColor="primary" color="white" pos="sticky" top={-3}>
      <Text fontSize="sm" textAlign="center"><strong>{tag.toUpperCase()}</strong></Text>
    </Box>
  );
}

interface IHangerProps {
  tag?: string;
}