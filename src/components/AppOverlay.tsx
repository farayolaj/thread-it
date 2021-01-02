import { IconButton } from '@chakra-ui/react';
import { AddIcon, HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import { useAddNote } from '../context/ThreadHooks';

export default function AppOverlay({ onSideBarOpen }: IAppOverlayProps): JSX.Element {
  const addNote = useAddNote();

  return (
    <>
      <IconButton
        d={[null, null, 'none']}
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
        right={3}
        bottom={3}
        size="sm"
        aria-label="Add new note"
        color="white" bg="primary"
        alignSelf="flex-end" icon={<AddIcon />}
        mb={5} onClick={addNote}
        isRound
      />
    </>
  );
}

interface IAppOverlayProps {
  onSideBarOpen: () => void;
}