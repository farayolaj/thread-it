import React from 'react';
import { Input, Tag } from '@chakra-ui/core';

import { handleChange } from '../utils';

export default function TagInput({ tagInput, setTagInput, onEnter }: ITagInputProps): JSX.Element {
  return (
    <Tag size="sm" minW="auto" mr={2} variant="footer" >
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

export interface ITagInputProps {
  tagInput: string;
  setTagInput: (input: string) => void;
  onEnter: (ev: React.FormEvent<HTMLFormElement>) => void;
}