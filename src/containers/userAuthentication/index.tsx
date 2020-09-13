import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Radio, Tooltip, Layout } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { RadioChangeEvent } from 'antd/lib/radio';
import { pageFooterNote } from '../../constants/names';
import { ReactComponent as SiteIcon } from '../../assets/images/site-icon.svg';

const { Content, Footer } = Layout;

interface UserAuthenticationProps {}

const UserAuthentication: React.FC<UserAuthenticationProps> = props => {
  const [view, setView] = useState<'login' | 'signup'>('login');
  const [form] = Form.useForm();

  const loginOptions = [
    { label: 'Login', value: 'login' },
    { label: 'Signup', value: 'signup' },
  ];

  const onFormFillFinishHandler = (data: any) => {
    console.log('Received values of form: ', data);
  };

  const viewChangeHandler = (event: RadioChangeEvent) => {
    setView(event.target.value);
  };

  const renderLoginView = () => (
    <>
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{ remember: true }}
        onFinish={onFormFillFinishHandler}>
        <Form.Item
          name='loginUsername'
          rules={[{ required: true, message: 'Please input your Username!' }]}>
          <Input
            prefix={<UserOutlined style={{ color: 'gray' }} />}
            placeholder='Username'
          />
        </Form.Item>
        <Form.Item
          name='loginPassword'
          rules={[{ required: true, message: 'Please input your Password!' }]}>
          <Input.Password
            prefix={<LockOutlined style={{ color: 'gray' }} />}
            placeholder='Password'
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a style={{ float: 'right' }} href=''>
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'>
              Log in
            </Button>
          </div>
        </Form.Item>
      </Form>
      <p
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        Don't have an account?
        <Button
          style={{ marginLeft: -10 }}
          type='link'
          onClick={() => setView('signup')}>
          Sign up
        </Button>
      </p>
    </>
  );

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 10 },
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

  const renderSignupView = () => (
    <>
      <Form
        {...formItemLayout}
        form={form}
        name='register'
        onFinish={onFormFillFinishHandler}
        scrollToFirstError>
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
          name='username'
          label={
            <span>
              User Name&nbsp;
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
      <p
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        Already have an account?
        <Button
          style={{ marginLeft: -10 }}
          type='link'
          onClick={() => setView('login')}>
          Login
        </Button>
      </p>
    </>
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
          flex: 4,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <p
          style={{
            color: '#6262ff',
            fontSize: '5vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SiteIcon height={'8vh'} width={'8vw'} title='Drive' />
          <span>Welcome to Drive</span>
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            padding: '3vh 3vw 0 3vw',
            boxShadow: '0px 0px 10px lightgray',
          }}>
          {renderFormSwitcher()}
          {view === 'login' ? renderLoginView() : renderSignupView()}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', color: 'gray' }}>
        {pageFooterNote}
      </Footer>
    </Layout>
  );
};

export default UserAuthentication;
