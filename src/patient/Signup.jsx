import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { signupPatient } from '../lib/pocketbase';
import {Button, Col, Form, Input, Row, Typography} from 'antd';

const { Title } = Typography;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
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

export default function Signup() {
  const [form] = Form.useForm();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate=useNavigate()
  const handleSubmit = () => {
    form.validateFields().then(values => {
      if (values.password === values.confirm) {
        signupPatient(values.username, values.password);
        navigate("/");
      } else {
        window.alert('The two passwords that you entered do not match!');
      }
    }).catch(error => {
      console.log('Error:', error);
    });
  };
  

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
        <Title level={2}>Create A New Account</Title>
      </div>
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12} xl={8}>
          <Form form={form} {...formItemLayout} style={{ maxWidth: 600, }} scrollToFirstError onFinish={handleSubmit}>
            <Form.Item
              name="username"
              label="Username"
              rules={[
                {
                  type: 'username',
                  message: 'The input is not valid username!',
                },
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
            <Input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback>
              <Input.Password
                onChange={(e) => {
                const newPassword = e.target.value;
                const confirmedPassword = form.getFieldValue('confirm');

                if (!confirmedPassword || newPassword === confirmedPassword) {
                  setPassword(newPassword);
                }
                }}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
            <Input.Password />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}