import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';
import { privateRoutes, publicRoutes } from '../router/router';

const AppRouter = () => {
  const auth = useAppSelector((state) => state.auth.isAuth);

  return auth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};

export default AppRouter;
