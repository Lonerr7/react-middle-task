import { Layout, Menu } from 'antd';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setIsAuth } from '../redux/authSlice';

const Navbar: React.FC = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();

  const loginHandler = () => {
    dispatch(setIsAuth(true));
  };

  const logoutHandler = () => {
    dispatch(setIsAuth(false));
  };

  return (
    <Layout.Header>
      {isAuth ? (
        <>
          <div className="logo">nic3guy</div>
          <Menu
            theme="dark"
            mode="horizontal"
            selectable={false}
            style={{ justifyContent: 'flex-end' }}
          >
            <Menu.Item key={1} onClick={logoutHandler}>
              Выйти
            </Menu.Item>
          </Menu>
        </>
      ) : (
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          style={{ justifyContent: 'flex-end' }}
        >
          <Menu.Item key={1} onClick={loginHandler}>
            Войти
          </Menu.Item>
        </Menu>
      )}
    </Layout.Header>
  );
};

export default Navbar;
