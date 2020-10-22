import { HStack, IconButton, useColorModeValue, VStack } from '@chakra-ui/core';
import { CloseIcon } from '@chakra-ui/icons';
import React, { CSSProperties } from 'react';

export default function SideBar({ children, style, onClose }: ISideBarProps): JSX.Element {
  onClose = onClose ? onClose : () => { return; };
  const bgColor = useColorModeValue('whiteAlpha.900', 'blackAlpha.900');

  return (
    <HStack 
      w="fit-content" position="fixed" 
      spacing="0" align="center" 
      h="100vh" style={style} 
      zIndex={10000}
    >
      <VStack w="75vw" h="100%"
        align="normal" 
        bgColor={bgColor}
      >
        {children}
      </VStack>
      <IconButton
        bgColor={bgColor}
        aria-label="Close Sidebar" 
        variant="unstyled"
        icon={<CloseIcon />}
        color="primary"
        size="sm"
        rounded="0"
        onClick={onClose}
      />
    </HStack>
  );
}

export interface ISideBarProps {
  children: React.ReactNode;
  style: CSSProperties;
  onClose?: () => void;
}
