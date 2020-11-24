import { useDisclosure } from '@chakra-ui/react';
import React from 'react';

import AppOverlay from './components/AppOverlay';
import ThreadBoard from './components/ThreadBoard';
import SideBar from './components/SideBar';

function App(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SideBar isOpen={isOpen} onClose={onClose} />
      <AppOverlay onSideBarOpen={onOpen} />
      <ThreadBoard/>
    </>
  );
}

export default App;
