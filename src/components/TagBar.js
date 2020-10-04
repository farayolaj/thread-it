import React, { useState } from 'react';
import { IconButton, Stack, Tag, TagLabel } from '@chakra-ui/core';
import PropTypes from 'prop-types';

import TagInput from './TagInput';

export default function TagBar({ tags, onTagAdd }) {
  const [showTagInput, setShowTagInput] = useState(false);
  const [tagInput, setTagInput] = useState('');

  const onTagAddInner = () => {
    if (showTagInput) {
      const newTag = tagInput;
      setShowTagInput(false);
      setTagInput('');
      if (tagInput) onTagAdd(newTag);
    } else setShowTagInput(true);
  };
  return <Stack direction="row" w="60%" overflowX="auto">
    <IconButton icon="small-add" isRound size="xs" onClick={onTagAddInner} />
    {showTagInput ?
      <TagInput {...{ tagInput, setTagInput }} onEnter={onTagAddInner} /> :
      null}
    {tags.map((tag, index) => (
      <Tag key={index} size="sm" minW="auto">
        <TagLabel fontSize="xs" fontWeight="normal">
          {tag}
        </TagLabel>
      </Tag>
    ))}
  </Stack>;
}

TagBar.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTagAdd: PropTypes.func
};

TagBar.defaultProps = {
  tags: []
};