import React from 'react';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import { DateTime } from 'luxon';

import TagBar, { ITagBarProps } from './TagBar';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

export default function NoteFooter({
  time,
  tags,
  onTagAdd,
  onTagDelete,
  onDelete,
  onEdit
}: INoteFooterProps): JSX.Element {

  return (
    <Flex w="100%" direction="row" mt="0" justify="space-between" align="center">
      <TagBar {...{ tags, onTagAdd, onTagDelete }} />
      <IconButton
        aria-label="Edit note"
        icon={<EditIcon />}
        size="xs"
        onClick={onEdit}
        variant="footer"
        colorScheme="secondary"
        isRound />
      <IconButton
        aria-label="Delete note"
        icon={<DeleteIcon />}
        size="xs"
        ml="0"
        onClick={onDelete}
        variant="footer"
        colorScheme="secondary"
        isRound />
      <Text fontSize="xs" fontWeight="normal">
        {DateTime.fromMillis(time).toLocaleString(DateTime.TIME_24_SIMPLE)}
      </Text>
    </Flex>
  );
}

export interface INoteFooterProps {
  /** Time note was created */
  time: number;
  /** Tags to display */
  tags: ITagBarProps['tags'];
  /** Function called when delete button is clicked */
  onDelete?: () => void;
  /** Function called when add tag button is clicked */
  onTagAdd?: ITagBarProps['onTagAdd'];
  /** Function called when delete tag button is clicked */
  onTagDelete?: ITagBarProps['onTagDelete'];
  /** Function called when edit button is clicked */
  onEdit?: () => void
}
