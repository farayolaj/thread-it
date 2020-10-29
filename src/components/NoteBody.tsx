import React from 'react';
import { Box, Textarea, Text } from '@chakra-ui/core';

import { handleChange } from '../utils';

function NoteBody({ content, onContentChange, inEdit=false }: INoteBodyProps): JSX.Element {

  return <Box
    d="flex"
    justifyContent={content ? 'initial' : 'center'}
    alignItems={content ? 'initial' : 'center'}
  >
    {inEdit ?
      <Textarea
        value={content}
        onChange={handleChange(onContentChange)}
        resize="none"
        px="0"
        py="0"
        rows={6}
        h="auto"
        w="100%"
        autoFocus
      /> : (content ?
        <Text
          whiteSpace="pre-wrap"
          overflowWrap="break-word"
        >
          {content}
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
  onContentChange: (newContent: string) => void;
  inEdit?: boolean;
}

export default NoteBody;