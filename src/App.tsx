import { useColorMode, useDisclosure } from '@chakra-ui/core';
import React, { useEffect } from 'react';

import AppOverlay from './components/AppOverlay';
import ThreadBoard from './components/ThreadBoard';
import SideBar from './components/SideBar';

function App(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ColorModeFix/>
      <SideBar isOpen={isOpen} onClose={onClose} />
      <AppOverlay onSideBarOpen={onOpen} />
      <ThreadBoard/>
    </>
  );
}

function ColorModeFix() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode) toggleColorMode();
  // eslint-disable-next-line
  }, []);

  return null;
}

export default App;
