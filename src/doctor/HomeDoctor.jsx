import React, { useState } from 'react'
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
import { News } from './News';
import { Patients } from './Patients';


export default function HomeDoctor() {

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
        content = <News />;
        break;
      default:
        content = <Patients />;
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
              label: 'Home',
            },
            {
              key: '2',
              label: 'Patients',
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