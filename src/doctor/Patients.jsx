import React, { useEffect, useState } from 'react';
import {Button, Divider, List } from 'antd';
import { MedicalRecordAdd } from './MedicalRecordAdd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { pb } from "../lib/pocketbase";

export const Patients = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [showMedicalRecordAdd, setShowMedicalRecordAdd] = useState(false);
    const [selectedUsername, setSelectedUsername] = useState(null);

    const loadMoreData = () => {
        if (loading) {
          return;
        }
        setLoading(true);
        
        pb.collection('patient')
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

      const handleUsernameClick = (item) => {
        setShowMedicalRecordAdd(true);
        setSelectedUsername(item);
      };

    return(
        <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
    {!showMedicalRecordAdd && (
      <InfiniteScroll
        dataLength={data.length}
        hasMore={data.length < 50}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.key}>
              <List.Item.Meta
                title={
                    <Button type="link" onClick={() => handleUsernameClick(item)}>
                        {item.username}
                    </Button>
                }
              />
            </List.Item>
          )}
        />
      </InfiniteScroll>)}
      {showMedicalRecordAdd && (
        <MedicalRecordAdd
          username={selectedUsername}
        />
      )}
    </div>
    );
};