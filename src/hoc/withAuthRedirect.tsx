import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';
import { RouteNames } from '../router/router';

const withAuthRedirect = (Component: any) => {
  const RedirectComponent = () => {
    const isAuth = useAppSelector((state) => state.auth.isAuth);

    if (isAuth) return <Navigate to={RouteNames.EVENT} />;
    if (!isAuth) return <Navigate to={RouteNames.LOGIN} />;

    return <Component />;
  };

  return RedirectComponent;
};

export default withAuthRedirect;
