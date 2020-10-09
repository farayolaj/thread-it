import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Text } from '@chakra-ui/core';
import groupBy from 'lodash.groupby';
import { DateTime } from 'luxon';

import Note from './Note';
import Thread from './Thread';

// todo: Create an hanger component to hang the earliest thread on
/**
 * 
 * @param {{ thread: NoteType[]}} param0 
 */
export default function ThreadBoard({ thread }) {
  const [ focus, setFocus ] = useState('');
  const groupedThread = groupBy(
    thread,
    note => DateTime.fromMillis(note.time).startOf('day')
  );

  return (
    <Flex w="100%" overflowY="auto" direction="column" alignItems="center">
      <Hanger />
      {Object.entries(groupedThread).map(([date, notes]) =>
        <ThreadGroup key={date} date={date} notes={notes} focus={focus} getFocus={setFocus} />)}
    </Flex>
  );
}

ThreadBoard.propTypes = {
  thread: PropTypes.arrayOf(Note.propTypes.data)
};

/**
 * 
 * @param {{date: string, notes: object[], focus: boolean, getFocus: function}} param0 
 */
function ThreadGroup({ date, notes, focus, getFocus }) {
  return (
    <>
      {notes.map((note, index) => (
        <React.Fragment key={note.id}>
          <Thread date={index === 0 ? date : undefined} />
          <Note data={note} hasFocus={focus===note.id} getFocus={getFocus} />
        </React.Fragment>
      ))}
    </>
  );
}

ThreadGroup.propTypes = {
  date: Thread.propTypes.date,
  notes: PropTypes.arrayOf(Note.propTypes.data).isRequired,
  focus: PropTypes.string,
  getFocus: PropTypes.func
};

/**
 * 
 * @param {{ tag: string }} tag currently focused tag
 */
function Hanger({ tag }) {
  return (
    <Box w="100%" p={1} borderWidth="thin" borderStyle="solid" bg="rgba(200, 200, 200, 0.1)">
      <Text fontSize="sm" textAlign="center"><strong>{tag.toUpperCase()}</strong></Text>
    </Box>
  );
}

Hanger.propTypes = {
  tag: PropTypes.string
};

Hanger.defaultProps = {
  tag: 'all'
};