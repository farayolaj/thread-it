import React, { useState } from 'react';
import { Box, Stack, Text, Textarea } from '@chakra-ui/core';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import ResizableTextArea from 'react-textarea-autosize';

import NoteFooter from './NoteFooter';
import { handleChange } from '../utilities';

export default function NewNote({ data: { /* id, */ content, tags, time }, hasFocus }) {
  const [innerContent, setInnerContent] = useState(content);
  const [inEdit, shouldEdit] = useState(false);

  /* const setInnerContentWithLimit = newContent => {
    if (newContent.length <= 96) setInnerContent(newContent);
  }; */

  const toggleEdit = () => {
    if (inEdit) {
      shouldEdit(false);
    } else {
      shouldEdit(true);
    }
  };

  return (
    <Stack
      width="80vw"
      spacing={4}
      p={1}
      backgroundColor="rgba(200,200,200,0.1)"
      borderStyle="solid"
      borderWidth="thin"
      borderColor="lightgray"
    >
      <Box
        d="flex"
        justifyContent={innerContent ? 'initial' : 'center'}
        alignItems={innerContent ? 'initial' : 'center'}
        minH={32}
      >
        {inEdit ?
          <Textarea
            value={innerContent}
            onChange={handleChange(setInnerContent)}
            resize="none"
            rows={6}
            h="auto"
            autoFocus /> :
          <Text
            px={4}
            py={2}
            whiteSpace="pre-wrap"
            overflowWrap="break-word"
            color={innerContent ? 'initial' : 'gray.500'}
          >
            {innerContent || 'Nothing here...'}
          </Text>
        }
      </Box>
      {hasFocus ?
        <NoteFooter tags={tags} time={time} inEdit={inEdit} toggleEdit={toggleEdit} /> :
        null
      }
    </Stack>
  );
}

NewNote.propTypes = {
  data: PropTypes.shape({
    /** Note id */
    id: PropTypes.number,
    /** Note content */
    content: PropTypes.string.isRequired,
    /** Tags applied to note */
    tags: NoteFooter.propTypes.tags,
    /** Time note was created */
    time: NoteFooter.propTypes.time
  }),
  /** denotes if note should be focused on */
  hasFocus: PropTypes.bool
};

NewNote.defaultProps = {
  data: {
    tags: NoteFooter.defaultProps.tags
  },
  hasFocus: false
};
