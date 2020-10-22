import React from 'react';
import { Avatar, Button, Flex, Grid, Text, VStack } from '@chakra-ui/core';

import { IUser } from '../types';

export default function UserBoard({ user }: IUserBoardProps): JSX.Element {
  let isUserPresent = false, userInfo = null;

  if (user && user.id) {
    isUserPresent = true;
    userInfo = {
      name: `${user.lastName} ${user.firstName}`,
      profilePic: user.profilePic
    };
  }

  return (
    <VStack spacing={4} p={2} bg="secondary" align="normal" >
      <UserInfo info={userInfo} />
      <Flex justifyContent="space-around">
        {!isUserPresent ?
          <>
            <Button size="sm" rounded="0">Sign In</Button>
            <Button size="sm" rounded="0">Sign Up</Button>
          </> : <>
            <Button size="sm" rounded="0">Sign Out</Button>
            <Button size="sm" rounded="0">Settings</Button>
          </>
        }
      </Flex>
    </VStack>
  );
}

export interface IUserBoardProps {
  user: IUser | null;
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