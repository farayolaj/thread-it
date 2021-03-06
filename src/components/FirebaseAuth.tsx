import { Box } from '@chakra-ui/react';
import firebase from '../firebase';
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { auth } from '../firebase';

const uiConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true
    },
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