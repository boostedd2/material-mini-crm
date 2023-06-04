import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from './AuthContext';

const withAuth = (WrappedComponent) => {
  const WrapperComponent = (props) => {
    const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
      const storedIsLoggedIn = sessionStorage.getItem('isLoggedIn');
      const isLoginPage = router.pathname === '/login';
      const isIndexPage = router.pathname === '/';

      if (storedIsLoggedIn) {
        setLoggedIn(true)
      }

      if (isIndexPage) {
        router.replace('/dashboard')
      }

      if (!isLoginPage && !storedIsLoggedIn) {
        router.replace('/login');
      }

      if (isLoginPage && storedIsLoggedIn) {
        router.replace('/dashboard');
      }
    }, []);

    if ((router.pathname === '/login' && !isLoggedIn) || isLoggedIn) {
      return <WrappedComponent {...props} />;
    }

    return null;
  };

  return WrapperComponent;
};

export default withAuth;
