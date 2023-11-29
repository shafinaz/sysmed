import React, { useEffect, useState } from 'react';
import { Collapse, theme, Space, Card} from 'antd';
import { pb } from "../lib/pocketbase";
import moment from "moment";

const { Panel } = Collapse;
const buttonWidth = 70;

export const NewsPatient = () => {

    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };

    const [data, setData] = useState([]);

    useEffect(() => {
      pb.collection('news').getList(1, 200, {
        filter: 'role ~ "patient"',
    }).then((res) => {
        setData(res);
      });
    }, []);

    return(
        <>
        <Space direction="vertical" size={16} style={{ width: '100%' }}>
            {Object.values(data).map((item) => (
              Object.values(item).map((subItem) => (
                <Card title={moment(subItem.date).format('Do MMMM YYYY')} style={{ width: "100%" }}>
                <p>{subItem.content.replace(/<\/?p>/g, '')}</p>
                </Card>
            ))))}
        </Space>
    </>
    );
};