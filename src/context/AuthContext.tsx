import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';

import { IUser } from '../types';

const AuthContext = React.createContext<IAuthContext | null>(null);

export interface IAuthContext {
  user: IUser | null;
  isUserLoggedIn: boolean;
  logout: () => void;
}

export function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [user, setUser] = useState<IAuthContext['user']>(null);
  const isUserLoggedIn = !!user;

  useEffect(() => {
    return auth.onAuthStateChanged(authUser => {
      if (authUser) {
        setUser({
          id: authUser.uid,
          name: authUser.displayName as string,
          profilePic: authUser.photoURL as string
        });
      } else setUser(null);
    });
  }, []);

  const value: IAuthContext = {
    user,
    isUserLoggedIn,
    logout: () => auth.signOut()
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;