import { Box, StackDivider, VStack } from '@chakra-ui/core';
import React from 'react';
import { useSelectedTag, useTags } from '../context/ThreadHooks';

export default function TagList(): JSX.Element {
  const tags = useTags();
  const { selectedTag: selected, selectTag } = useSelectedTag();

  const divider = <StackDivider />;

  return (
    <Box color="primary" fontSize="sm" h="60%">
      <Box p={1} letterSpacing={2} fontWeight="bold" borderBottomColor="primary" borderBottomWidth={1}>
        TAGS
      </Box>
      <VStack px={1} py={2} align="start" divider={divider} overflowY="auto" h="100%" >
        <TagItem key="all" tag="all" active={selected === 'all'} selectTag={selectTag} />
        {tags.map(tag => (
          <TagItem key={tag} tag={tag} active={selected === tag} selectTag={selectTag} />
        ))}
      </VStack>
    </Box>
  );
}

/* export interface ITagListProps {
  tags?: string[];
  selected?: string;
} */

function TagItem({ active, tag, selectTag }: ITagItemProps) {
  return (
    <Box as="span"
      w="100%"
      _hover={{ bg: 'secondary' }}
      bg={active ? 'secondary' : 'normal'}
      p={1}
      onClick={() => selectTag(tag)}
    >
      {tag[0].toUpperCase().concat(tag.slice(1))}
    </Box>
  );
}

interface ITagItemProps {
  active: boolean;
  tag: string;
  selectTag: (tag: string) => void;
}