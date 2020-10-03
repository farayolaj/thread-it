import React from 'react';
import { Flex, IconButton, Text } from '@chakra-ui/core';
// import { BsThreeDotsVertical } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { TagBar } from './TagBar';

export default function NewNoteFooter({ tags, inEdit, onTagAdd, onDelete, onSave }) {

  return (
    <Flex w="100%" direction="row" justify="space-between" align="center">
      <TagBar {...{ tags, onTagAdd }} />
      <IconButton
        icon="edit"
        variant={inEdit ? 'solid' : 'outline'}
        size="sm"
        onClick={onSave}
        isRound />
      <IconButton
        icon="delete"
        variant="outline"
        size="sm"
        ml="0"
        onClick={onDelete}
        isRound />
      <Text fontSize="sm">10:05</Text>
    </Flex>
  );
}

NewNoteFooter.propTypes = {
  /** Tags to display */
  tags: TagBar.propTypes.tags,
  /** Speciefies if footer should show edit menu instead */
  inEdit: PropTypes.bool,
  /** Function called when delete button is clicked */
  onDelete: PropTypes.func,
  /** Function called when edit button is clicked */
  onEdit: PropTypes.func,
  /** Function called when save button is clicked */
  onSave: PropTypes.func,
  /** Function called when add tag button is clicked */
  onTagAdd: PropTypes.func
};

NewNoteFooter.defaultProps = {
  tags: TagBar.defaultProps.tags,
  inEdit: false
};
