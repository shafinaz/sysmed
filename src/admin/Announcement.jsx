import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaretRightOutlined, PlusCircleFilled } from '@ant-design/icons';
import { Collapse, theme, Button, Space, Tooltip} from 'antd';
import { pb } from "../lib/pocketbase";
import moment from "moment";
import ContentUpdate from './ContentUpdate';

const { Panel } = Collapse;
const buttonWidth = 70;

const Announcement = () => {
  const navigate = useNavigate();
  const [showComponent, setShowComponent] = useState(false);
  const handleButtonClick = () => {
    setShowComponent(true);
  };

  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    pb.collection('news').getFullList().then((res) => {console.log(res); setData(res)});
  }, []);

  return (
    <>
      {showComponent ? (
        <ContentUpdate navigate={navigate} />
      ) : (
        <Space direction="vertical" style={{ width: '100%' }}>
          <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            style={{
              background: token.colorBgContainer,
            }}>
            {data.map((item) => (
              <Panel
                header={moment(item.date).format('Do MMMM YYYY')}
                key={item.id}
                style={panelStyle}>
                <p>{item.content.replace(/<\/?p>/g, '')}</p>
              </Panel>
            ))}
          </Collapse>
          <div
            style={{
              width: buttonWidth,
              marginLeft: buttonWidth * 4 + 24,
            }}>
            <Tooltip placement="rightTop" title="Add Content">
              <Button
                type="Ghost"
                shape="circle"
                style={{ fontSize: '60px' }}
                icon={<PlusCircleFilled />}
                onClick={handleButtonClick}
              />
            </Tooltip>
          </div>
        </Space>
      )}
    </>
  );
};


export default Announcement; 
