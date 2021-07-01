import { Box, Flex, Menu, MenuButton, MenuItem, MenuList, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';
import { BsThreeDotsVertical as MenuIcon } from 'react-icons/bs';
import { useSelectedTag, useTags } from '../context/ThreadHooks';

export default function TagList(): JSX.Element {
  const tags = useTags();
  const { selectedTag: selected, selectTag } = useSelectedTag();


  return (
    <Box color="primary" fontSize="sm" h="60%">
      <Box p={1} letterSpacing={2} fontWeight="bold" borderBottomColor="primary" borderBottomWidth={1}>
        TAGS
      </Box>
      <VStack pl={3} py={2} align="start" overflowY="auto" h="100%" >
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
  const bgColor = useColorModeValue('whiteAlpha.900', '#1a202c');

  return (
    <Flex as="span"
      w="100%"
      _hover={{ bg: 'rgba(155, 81, 224, 0.1)' }}
      bg={active ? 'secondary' : 'normal'}
      p={1}
      px={[4, null, 4]}
      justify="space-between"
      borderLeftRadius="3rem"
    >
      <Box onClick={() => selectTag(tag)}>
        {tag[0].toUpperCase().concat(tag.slice(1))}
      </Box>
      <Menu>
        <MenuButton>
          <MenuIcon />
        </MenuButton>
        <MenuList bg={bgColor} borderColor="primary" minW="7rem">
          <MenuItem _focus={{ bg: 'secondary' }} _hover={{ bg: 'secondary' }}>Rename</MenuItem>
          <MenuItem _focus={{ bg: 'secondary' }} _hover={{ bg: 'secondary' }}>Delete</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

interface ITagItemProps {
  active: boolean;
  tag: string;
  selectTag: (tag: string) => void;
}