import { Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, HStack, useColorModeValue, VStack } from '@chakra-ui/core';
import React, { useState } from 'react';

import FirebaseAuth from './FirebaseAuth';
import TagList from './TagList';
import UserBoard from './UserBoard';
import { useUser } from '../context/AuthHooks';

export default function SideBar({ isOpen=true, onClose }: ISideBarProps): JSX.Element {
  onClose = onClose ? onClose : () => { return; };
  const bgColor = useColorModeValue('whiteAlpha.900', '#1a202c');
  const [openAuth, setOpenAuth] = useState(false);
  const { isUserLoggedIn } = useUser();

  const toggleOpenAuth = () => setOpenAuth(prev => !prev);

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left" >
      <DrawerOverlay>
        <DrawerContent bg="transparent">
          <HStack
            w="100%" position="fixed"
            spacing="0" align="center"
            h="100vh"
            zIndex={10000}
            bg="transparent"
          >
            <VStack w="75vw" h="100%"
              align="normal"
              bgColor={bgColor}
            >
              <UserBoard onLoginClick={toggleOpenAuth} />
              {!isUserLoggedIn && openAuth ? <FirebaseAuth /> : <TagList />}
            </VStack>
            <HStack align="center" h="100vh" onClick={onClose}>
              <DrawerCloseButton
                variant="unstyled" color="primary"
                rounded="0" bgColor={bgColor}
                pos="initial"
              />
            </HStack>
          </HStack>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

export interface ISideBarProps {
  isOpen?: boolean;
  onClose?: () => void;
}
