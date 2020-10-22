import { IconButton } from '@chakra-ui/core';
import { AddIcon, HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';

export default function AppOverlay({ onSideBarOpen }: IAppOverlayProps): JSX.Element {
  return (
    <>
      <IconButton
        pos="fixed"
        left={1}
        top="calc(50vh - 1.25rem)"
        variant="unstyled"
        aria-label="Open sidebar"
        color="primary" bg="transparent"
        alignSelf="center" icon={<HamburgerIcon />}
        onClick={onSideBarOpen}
      />
      <IconButton
        pos="fixed"
        right={1}
        bottom={3}
        size="sm"
        aria-label="Add new note"
        color="white" bg="primary"
        alignSelf="flex-end" icon={<AddIcon />}
        mb={5}
        isRound
      />
    </>
  );
}

interface IAppOverlayProps {
  onSideBarOpen: () => void;
}