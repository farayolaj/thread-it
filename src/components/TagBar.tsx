import React, { useState } from 'react';
import { IconButton, Stack, Tag, TagCloseButton, TagLabel } from '@chakra-ui/core';

import TagInput from './TagInput';
import { SmallAddIcon } from '@chakra-ui/icons';

export default function TagBar({ tags, onTagAdd, onTagDelete }: ITagBarProps): JSX.Element {
  // const { toggleColorMode } = useColorMode();
  const [showTagInput, setShowTagInput] = useState(false);
  const [tagInput, setTagInput] = useState('');

  const onTagAddInner = () => {
    if (showTagInput) {
      const newTag = tagInput;
      setShowTagInput(false);
      setTagInput('');
      if (tagInput && onTagAdd) onTagAdd(newTag);
    } else setShowTagInput(true);
  };
  return (
    <>
      <IconButton
        aria-label="Add tag"
        icon={<SmallAddIcon />}
        size="xs"
        onClick={onTagAddInner}
        variant="footer"
        colorScheme="secondary"
        isRound
      />
      <Stack direction="row" w="50%" overflowX="auto" pr={1}>
        {showTagInput ?
          <TagInput {...{ tagInput, setTagInput }} onEnter={onTagAddInner} /> :
          null}
        {tags.map((tag, index) => (
          <Tag key={index} size="sm" minW="auto" variant="footer">
            <TagLabel fontSize="xs" fontWeight="normal">
              {tag}
            </TagLabel>
            <TagCloseButton onClick={() => {
              if (onTagDelete) onTagDelete(tag);
            }} />
          </Tag>
        ))}
      </Stack>
    </>
  );
}

export interface ITagBarProps {
  tags: string[];
  onTagAdd?: (newTag: string) => void;
  onTagDelete?: (tag: string) => void;
}