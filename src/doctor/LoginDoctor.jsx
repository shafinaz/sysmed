import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginDoctor } from '../lib/pocketbase';
import { Row, Col, Typography, Button, Form, Input } from 'antd';

const { Title } = Typography;

export default function LoginDoctor() {
 const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate=useNavigate()
 const handleSubmit = () => {
   if (!username ||!password) {
     window.alert("Invalid Login credentials");
     return;
   }
   loginDoctor(username, password);
   navigate("/")
 };
 return (
  <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
      <Title level={2}>Login As Doctor</Title>
    </div>
    <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12} xl={8}>
          <Form name="basic" 
             labelCol={{span: 8,}}
             wrapperCol={{span: 16,}}
             style={{maxWidth: 600,}}
             autoComplete="off">
             <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                 required: true,
                 message: 'Please input your email!',
                 },
               ]}>
             <Input
               type="text"
               placeholder="Username"
               onChange={(e) => setUsername(e.target.value)}
               required
             />
             </Form.Item>
             <Form.Item
              label="Password"
              name="password"
              rules={[
               {
               required: true,
               message: 'Please input your password!',
               },
               ]}
             >
             <Input.Password
               onChange={(e) => setPassword(e.target.value)}
               type="password"
               placeholder="Password"
             />
             </Form.Item>
             <Form.Item
               wrapperCol={{
               offset: 8,
               span: 16,
               }}
               >
               <Button type="primary" htmlType="submit" onClick={handleSubmit}> Log In </Button>
             </Form.Item>
          </Form>
        </Col>
    </Row>
  </>
 );
}