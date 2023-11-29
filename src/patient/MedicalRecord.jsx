import React, { useEffect, useState } from 'react';
import moment from "moment";
import { Descriptions } from 'antd';
import { pb } from "../lib/pocketbase";

const fetchDoctorName = async (doctorId) => {
    const doctorRecord = await pb.collection('doctor').getOne(doctorId);
    return doctorRecord.username;
};

export const MedicalRecord = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        pb
            .collection('medical_checkup')
            .getFullList({
                filter: `patient = "${pb.authStore.model?.id}"`
            })
            .then((res) => {
                // Create an array of promises that will fetch the doctor's username for each medical checkup item
                const promises = res.map((item) => fetchDoctorName(item.doctor));
                
                // Wait for all promises to resolve before setting the state
                Promise.all(promises).then((doctorNames) => {
                    const dataWithDoctors = res.map((item, index) => ({
                        ...item,
                        doctorName: doctorNames[index]
                    }));
                    setData(dataWithDoctors);
                });
            });
      }, []);

    return(
        <>
        <div>
            <Descriptions
                title="Medical Record"
                bordered
            >
                {data.map((item) => (
                    <React.Fragment key={item.id}>
                        <Descriptions.Item label="Date">{moment(item.date_of_checkup).format('Do MMMM YYYY')}</Descriptions.Item>
                        <Descriptions.Item label="Doctor">{item.doctorName}</Descriptions.Item>
                        <Descriptions.Item label="Doctor's Comments">
                            {item.doctors_comment.replace(/<\/?p>/g, '')}
                        </Descriptions.Item>
                    </React.Fragment>
                ))}
            </Descriptions>
        </div>
        </>
    );
};