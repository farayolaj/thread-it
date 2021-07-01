import { Box, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, HStack, useBreakpointValue, useColorModeValue, VStack } from '@chakra-ui/react';
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
      {isMobile && <Flex direction="column" justify="center" h="100vh" onClick={onClose}>
        <Box w="25%">
          <Box as="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.023468 75.023468" fill={bgColor}>
            <path d="M 75.023445,75.000001 A 75.000001,75.000001 0 0 1 0.02343307,0 H 0 v 75.023472 h 75.023445 z"
            />
          </Box>
        </Box>
        <DrawerCloseButton
          variant="unstyled" color="primary"
          rounded="0" bgColor={bgColor}
          pos="initial"
          p={2}
          borderRightRadius="1rem"
        />
        <Box w="25%">
          <Box as="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.023468 75.023468" fill={bgColor}>
            <path
              d="M 0.02347465,75.022716 A 75.000001,75.000001 0 0 1 75.02346,0.02267717 V 0 H 0 v 75.023472 z"
            />
          </Box>
        </Box>
      </Flex>}
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
