import React from 'react';
import { Flex, IconButton, Text } from '@chakra-ui/core';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';

import TagBar from './TagBar';

export default function NoteFooter({ time, tags, inEdit, onTagAdd, onDelete, toggleEdit}) {

  return (
    <Flex w="100%" direction="row" justify="space-between" align="center">
      <TagBar {...{ tags, onTagAdd }} />
      <IconButton
        icon="edit"
        variant={inEdit ? 'solid' : 'outline'}
        size="xs"
        onClick={toggleEdit}
        isRound />
      <IconButton
        icon="delete"
        variant="outline"
        size="xs"
        ml="0"
        onClick={onDelete}
        isRound />
      <Text fontSize="xs" fontWeight="normal">
        {DateTime.fromMillis(time).toLocaleString(DateTime.TIME_24_SIMPLE)}
      </Text>
    </Flex>
  );
}

NoteFooter.propTypes = {
  /** Time note was created */
  time: PropTypes.number,
  /** Tags to display */
  tags: TagBar.propTypes.tags,
  /** Edit mode specifier */
  inEdit: PropTypes.bool,
  /** Function called when delete button is clicked */
  onDelete: PropTypes.func,
  /** Toggle edit mode */
  toggleEdit: PropTypes.func,
  /** Function called when add tag button is clicked */
  onTagAdd: PropTypes.func
};

NoteFooter.defaultProps = {
  tags: TagBar.defaultProps.tags,
  inEdit: false
};
