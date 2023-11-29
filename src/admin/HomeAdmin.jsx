import React, { useState } from 'react';
import Manage from "./Manage"
import Announcements from './Announcement';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;


export default function HomeAdmin() {

  const {
    token: { colorBgContainer },
    } = theme.useToken(); 

  const [selectedMenuItem, setSelectedMenuItem] = useState('1');

  const handleMenuClick = (e) => {
    setSelectedMenuItem(e.key);
  };

  let content;

  switch (selectedMenuItem) {
    case '1':
      content = <Manage />;
      break;
    default:
      content = <Announcements />;
  }
  
  return (
   <> 
     <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          selectedKeys={[selectedMenuItem]}
          onClick={handleMenuClick}
          items={[
            {
              key: '1',
              label: 'Doctors',
            },
            {
              key: '2',
              label: 'Announcements',
            },
          ]}
        />
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
          }}
        >
        {content}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
          SYSMED Portal ©2023
      </Footer>
    </Layout>
   </>
 );
}