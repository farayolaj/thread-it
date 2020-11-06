import { Box } from '@chakra-ui/core';
import firebase from 'firebase/app';
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { auth } from '../firebase';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

function FirebaseAuth(): JSX.Element {
  return (
    <Box>
      <StyledFirebaseAuth firebaseAuth={auth} uiConfig={uiConfig} />
    </Box>
  );
}

export default FirebaseAuth;