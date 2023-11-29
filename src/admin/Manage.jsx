import React, { useEffect, useState } from 'react';
import { Avatar, Divider, List, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { pb } from "../lib/pocketbase";

const Manage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    
    pb.collection('doctor')
      .getFullList()
      .then((res) => {
        setData([...data, ...res]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  
  useEffect(() => {
    loadMoreData();
  }, []);
  
  return (
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.key}>
              <List.Item.Meta
                title={item.username}
                description={item.department}
              />
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default Manage;

// need to add delete doctor and add doctor using new component called doctor sign up
