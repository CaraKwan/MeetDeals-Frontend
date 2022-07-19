import React from 'react'
import { Row, Col, Typography, Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { auth } from '../Messenger/firebase';
import { useState } from 'react';
import '../index.css';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import { Link, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';


const { Title } = Typography;
const { Search } = Input;


function MainHeader() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const naviagte = useNavigate();
    const logout = async () => {
        await auth.signOut();
        naviagte('/');
    }
    return (
        <header>
            <Row className='header'>
                <Col span={10}>
                    <div className='title'>
                        <Link to='/' >
                            <Title style={{ fontSize: "25px" }}> MeetDeals </Title>
                        </Link>

                    </div>
                </Col>

                <Col span={4}>

                    <Search placeholder="input search text" onSearch={console.log("search")} />
                </Col>

                <Col span={10} className='headerButtons'>

                    <>
                        <Button type="primary" onClick={showModal}>
                            DashBoard
                        </Button>
                        <Modal title="User Dashboard" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                            <Dashboard />
                        </Modal>
                    </>

                    <Button type="primary" onClick={logout} icon={<UserOutlined />} size={'medium'} style={{ margin: "0 5px" }}>
                        Log Out
                    </Button>

                </Col>
            </Row>


        </header>
    )
}

export default MainHeader


