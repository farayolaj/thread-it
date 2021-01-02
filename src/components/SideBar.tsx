import { Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, HStack, useBreakpointValue, useColorModeValue, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

import FirebaseAuth from './FirebaseAuth';
import TagList from './TagList';
import UserBoard from './UserBoard';
import { useUser } from '../context/AuthHooks';

export default function SideBar({ isOpen = true, onClose }: ISideBarProps): JSX.Element {
  onClose = onClose ? onClose : () => { return; };
  const bgColor = useColorModeValue('whiteAlpha.900', '#1a202c');
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });
  const [openAuth, setOpenAuth] = useState(false);
  const { isUserLoggedIn } = useUser();

  const toggleOpenAuth = () => setOpenAuth(prev => !prev);

  const sideBarMain = (
    <HStack
      w={['100%', null, 'auto']} position={['fixed', null, 'static']}
      spacing="0" align="center"
      h="100vh"
      zIndex={10000}
      bg="transparent"
    >
      <VStack w={['75vw', null, '25vw']} h="100%"
        align="normal"
        bgColor={bgColor}
        spacing={5}
      >
        <UserBoard onLoginClick={toggleOpenAuth} />
        {!isUserLoggedIn && openAuth ? <FirebaseAuth /> : <TagList />}
      </VStack>
      {isMobile && <HStack align="center" h="100vh" onClick={onClose}>
        <DrawerCloseButton
          variant="unstyled" color="primary"
          rounded="0" bgColor={bgColor}
          pos="initial"
        />
      </HStack>}
    </HStack>
  );

  return (
    isMobile ?
      <Drawer isOpen={isOpen} onClose={onClose} placement="left" >
        <DrawerOverlay>
          <DrawerContent boxShadow="none" bg="transparent">
            {sideBarMain}
          </DrawerContent>
        </DrawerOverlay>
      </Drawer> :
      sideBarMain
  );
}

export interface ISideBarProps {
  isOpen?: boolean;
  onClose?: () => void;
}
