import React, { useState, useContext } from 'react';
import { Box, Textarea, Text } from '@chakra-ui/core';

import { handleChange } from '../utilities';
import { NoteEditContext } from './Note';

export default function NoteBody({ content }: INoteBodyProps): JSX.Element {
  const [innerContent, setInnerContent] = useState(content);
  const { inEdit } = useContext(NoteEditContext) || { inEdit: false };

  /* const setInnerContentWithLimit = newContent => {
  if (newContent.length <= 96) setInnerContent(newContent);
}; */

  return <Box
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
        w="100%"
        autoFocus
      /> : (innerContent ?
        <Text
          px={4}
          py={2}
          whiteSpace="pre-wrap"
          overflowWrap="break-word"
        >
          {innerContent}
        </Text> :
        <Text color='gray.500'>
          Nothing here...
        </Text>
      )
    }
  </Box>;
}

export interface INoteBodyProps {
  content: string;
}