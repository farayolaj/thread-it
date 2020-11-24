import React from 'react';
import { Avatar, Button, Flex, Grid, IconButton, Text, useColorMode, VStack } from '@chakra-ui/react';

import { useAuth, useUser } from '../context/AuthHooks';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function UserBoard({ onLoginClick }: IUserBoardProps): JSX.Element {
  const { user, isUserLoggedIn } = useUser();
  const { logout } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();

  onLoginClick = onLoginClick ? onLoginClick : () => { return; };

  let userInfo = null;

  if (isUserLoggedIn) {
    userInfo = {
      name: user.name,
      profilePic: user.profilePic
    };
  }

  return (
    <VStack spacing={4} p={2} bg="secondary" align="normal" >
      <UserInfo info={userInfo} />
      <Flex justify="space-around" align="center">
        <>
          {!isUserLoggedIn ?
            <Button size="sm" rounded="0" onClick={onLoginClick}>Sign In</Button> :
            <Button size="sm" rounded="0" onClick={logout}>Sign Out</Button>
          }
          <IconButton
            aria-label="Change theme"
            size="lg"
            variant="unstyled"
            color={colorMode === 'light' ? 'primary' : 'white'}
            icon={colorMode === 'light' ?
              <MoonIcon /> :
              <SunIcon />}
            onClick={toggleColorMode}
          />
          {/* <Button size="sm" rounded="0">Settings</Button> */}
        </>
      </Flex>
    </VStack>
  );
}

export interface IUserBoardProps {
  onLoginClick?: () => void;
}

function UserInfo({ info }: IUserInfoProps): JSX.Element {
  const name = info ? info.name : 'Guest';
  const profilePic = info ? info.profilePic : '';

  return (
    <Grid templateColumns="4fr 2fr" gap={3}
      justifyItems="center" alignItems="center">
      <Text textAlign="center"
        fontWeight="900" color="primary">{name}</Text>
      <Avatar size="lg" name={name} bg="primary" src={profilePic} />
    </Grid>
  );
}

interface IUserInfoProps {
  info: {
    name: string;
    profilePic: string
  } | null
}