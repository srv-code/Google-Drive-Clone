import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Radio, Tooltip, Layout } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { RadioChangeEvent } from 'antd/lib/radio';
import { pageFooterNote } from '../../constants/names';

const { Content, Footer } = Layout;

interface UserAuthenticationProps {}

const UserAuthentication: React.FC<UserAuthenticationProps> = props => {
  const [view, setView] = useState<'login' | 'signup'>('login');

  const loginOptions = [
    { label: 'Login', value: 'login' },
    { label: 'Signup', value: 'signup' },
  ];

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const [form] = Form.useForm();

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onFormFillFinishHandler = (data: any) => {
    console.log('Received values of form: ', data);
  };

  const viewChangeHandler = (event: RadioChangeEvent) => {
    setView(event.target.value);
  };

  const renderLoginView = () => (
    <Form
      name='normal_login'
      className='login-form'
      initialValues={{ remember: true }}
      onFinish={onFormFillFinishHandler}>
      <Form.Item
        name='username'
        rules={[{ required: true, message: 'Please input your Username!' }]}>
        <Input
          prefix={<UserOutlined className='site-form-item-icon' />}
          placeholder='Username'
        />
      </Form.Item>
      <Form.Item
        name='password'
        rules={[{ required: true, message: 'Please input your Password!' }]}>
        <Input.Password
          prefix={<LockOutlined className='site-form-item-icon' />}
          placeholder='Password'
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name='remember' valuePropName='checked' noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className='login-form-forgot' href=''>
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' className='login-form-button'>
          Log in
        </Button>
        <p>
          Don't have an account?
          <Button
            style={{ marginLeft: -10 }}
            type='link'
            onClick={() => setView('signup')}>
            Sign up
          </Button>
        </p>
      </Form.Item>
    </Form>
  );

  const renderSignupView = () => (
    <Form
      {...formItemLayout}
      form={form}
      name='register'
      onFinish={onFormFillFinishHandler}
      scrollToFirstError>
      <p>
        Already have an account?
        <Button
          style={{ marginLeft: -10 }}
          type='link'
          onClick={() => setView('login')}>
          Login
        </Button>
      </p>
      <Form.Item
        name='email'
        label='E-mail'
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        name='password'
        label='Password'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback>
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='confirm'
        label='Confirm Password'
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                'The two passwords that you entered do not match!'
              );
            },
          }),
        ]}>
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='nickname'
        label={
          <span>
            Nickname&nbsp;
            <Tooltip title='What do you want others to call you?'>
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        name='agreement'
        valuePropName='checked'
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject('Should accept agreement'),
          },
        ]}
        {...tailFormItemLayout}>
        <Checkbox>
          I have read the <a href=''>agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type='primary' htmlType='submit'>
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );

  const renderFormSwitcher = () => (
    <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        marginBottom: '2vh',
      }}>
      <Radio.Group
        options={loginOptions}
        onChange={viewChangeHandler}
        value={view}
        optionType='button'
        buttonStyle='solid'
      />
    </div>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <div
          style={{
            width: '30%',
            marginTop: '10vh',
            backgroundColor: 'white',
            padding: '2vw 5vh',
          }}>
          {renderFormSwitcher()}
          {view === 'login' ? renderLoginView() : renderSignupView()}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>{pageFooterNote}</Footer>
    </Layout>
  );
};

export default UserAuthentication;
