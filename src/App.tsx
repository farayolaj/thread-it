import { Slide, useDisclosure } from '@chakra-ui/core';
import React from 'react';

import AppOverlay from './components/AppOverlay';
import data from './assets/fake/data.json';
import ThreadBoard from './components/ThreadBoard';
import UserBoard from './components/UserBoard';
import SideBar from './components/SideBar';
import TagList from './components/TagList';

function App(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Slide in={isOpen}>
        {styles => (
          <SideBar style={styles} onClose={onClose}>
            <UserBoard user={null} />
            <TagList tags={data.tags} />
          </SideBar>
        )}
      </Slide>
      <AppOverlay onSideBarOpen={onOpen} />
      <ThreadBoard thread={data.thread} />
    </>
  );
}

export default App;
