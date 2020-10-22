import { Box, StackDivider, VStack } from '@chakra-ui/core';
import React from 'react';

export default function TagList({ tags = [], selected = 'all' }: ITagListProps): JSX.Element {
  const divider = <StackDivider />;

  return (
    <Box color="primary" fontSize="sm" h="60%">
      <Box p={1} letterSpacing={2} fontWeight="bold" borderBottomColor="primary" borderBottomWidth={1}>
        TAGS
      </Box>
      <VStack p={1} align="start" divider={divider} overflowY="auto" h="100%" >
        <TagItem key="all" tag="all" active={selected === 'all'} />
        {tags.map(tag => (
          <TagItem key={tag} tag={tag} active={selected === tag} />
        ))}
      </VStack>
    </Box>
  );
}

export interface ITagListProps {
  tags?: string[];
  selected?: string;
}

function TagItem({ active, tag }: ITagItemProps) {
  return (
    <Box as="span"
      w="100%"
      _hover={{ bg: 'secondary' }}
      bg={active ? 'secondary' : 'normal'}
      p={1}
    >
      {tag}
    </Box>
  );
}

interface ITagItemProps {
  active: boolean;
  tag: string;
}