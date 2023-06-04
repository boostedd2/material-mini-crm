import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  const login = () => {
    setLoggedIn(true);
    sessionStorage.setItem('isLoggedIn', 'true');
    router.push('/dashboard');
  };

  const logout = () => {
    setLoggedIn(false);
    sessionStorage.removeItem('isLoggedIn');
    router.replace('/login');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
