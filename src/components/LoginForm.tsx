import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { logUserIn } from '../redux/authSlice';
import { IUser } from '../types/types';
import { rules } from '../utils/rules';

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isFetching, errorMsg } = useAppSelector((state) => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onFinish = (values: IUser) => {
    dispatch(
      logUserIn({ username: values.username, password: values.password })
    );
  };

  return (
    <Form name="basic" onFinish={onFinish}>
      {errorMsg && <div>{errorMsg}</div>}
      <Form.Item
        label="Логин"
        name="username"
        rules={[rules.required('Пожалуйста, введите корректный логин!')]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required('Пожалуйста, введите корректный пароль!')]}
      >
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isFetching}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
