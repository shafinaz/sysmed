import React from "react";
import { createMedical } from "../lib/pocketbase";
import { Button, Form, Input, Select, Typography, DatePicker} from 'antd';
const { Title } = Typography;

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

export const MedicalRecordAdd = ({ username }) => {

    const onFinish = (values) => {
        const { user: { content }, user:{ date }} = values;
        createMedical(content, username.id, date );
        
      };

    return(
        <>
        <Title level={2}>Add Patient's Medical Record</Title>
        <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{
              maxWidth: 600,
            }}
        >
        <Form.Item name={['user', 'patient']} label="Patient">
        <Select>
          <Select.Option value="username">{username.username}</Select.Option>
        </Select>
      </Form.Item>
        <Form.Item name={['user', 'content']} label="Doctor's Comment">
            <Input.TextArea />
        </Form.Item>
        <Form.Item
        name={['user', 'date']}
        label="Date"
      >
        <DatePicker/>
      </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
        </Form>
        </>
    )
}