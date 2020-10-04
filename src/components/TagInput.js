import React from 'react';
import { Input, Tag } from '@chakra-ui/core';
import PropTypes from 'prop-types';

import { handleChange } from '../utilities';

export default function TagInput({ tagInput, setTagInput, onEnter }) {
  return (
    <Tag size="sm" minW="auto" mr={2}>
      <form onSubmit={onEnter}>
        <Input
          minW={16}
          variant="unstyled"
          size="sm"
          fontSize="xs"
          fontWeight="normal"
          value={tagInput}
          onChange={handleChange(setTagInput)}
          autoFocus />
      </form>
    </Tag>
  );
}

TagInput.propTypes = {
  tagInput: PropTypes.string,
  setTagInput: PropTypes.func,
  onEnter: PropTypes.func
};