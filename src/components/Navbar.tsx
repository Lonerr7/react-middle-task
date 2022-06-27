import { Layout, Menu } from 'antd';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { logUserOut } from '../redux/authSlice';

const Navbar: React.FC = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const username = useAppSelector((state) => state.auth.user.username);
  const dispatch = useAppDispatch();

  const logOutHandler = () => {
    dispatch(logUserOut());
  };

  return (
    <Layout.Header>
      {isAuth ? (
        <>
          <div className="logo">{username}</div>
          <Menu
            theme="dark"
            mode="horizontal"
            selectable={false}
            style={{ justifyContent: 'flex-end' }}
          >
            <Menu.Item key={1} onClick={logOutHandler}>
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
          <Menu.Item key={1}>Войти</Menu.Item>
        </Menu>
      )}
    </Layout.Header>
  );
};

export default Navbar;
