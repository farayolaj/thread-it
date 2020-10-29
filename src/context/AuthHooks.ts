import { useContext } from 'react';

import AuthContext, { IAuthContext } from './AuthContext';
import { IUser } from '../types';

export const useUser = () => {
  const { user, isUserLoggedIn } = useContext(AuthContext) as IAuthContext;
  const userD = user as IUser;
  return { user: userD, isUserLoggedIn };
};

export const useAuth = () => {
  const { logout } = useContext(AuthContext) as IAuthContext;
  return {
    logout
  };
};