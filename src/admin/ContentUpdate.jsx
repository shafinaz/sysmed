import React from 'react';
import { Button, Form, Input, Select} from 'antd';
import { createNews } from '../lib/pocketbase';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

const ContentUpdate = ({ navigate }) => {

  const onFinish = (values) => {
    const { user: { content }, role } = values;
    createNews(content, role);
    navigate("..");
  };

    return(
        <>
         <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{
              maxWidth: 600,
            }}
        >
        <Form.Item name={['user', 'content']} label="content">
            <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="role"
          label="User Role"
          rules={[{ required: true, message: 'Please select the target audience!', type: 'array' }]}
          >
          <Select mode="multiple" placeholder="Please select the target audience!">
            <Option value="doctor">Doctor</Option>
            <Option value="patient">Patient</Option>
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
        </Form>
        </>
    );
}

export default ContentUpdate;