import React from 'react'
import { Row, Col, Typography, Button, Input, Breadcrumb, Menu, Dropdown } from 'antd';
import { UserOutlined, BorderOuterOutlined } from '@ant-design/icons';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
const { Title } = Typography;


function HomeHeader() {
    return (
        <header >
            <Row className='header_home' >
                <Col span={10}>
                    <div className='title_home'>
                        <Link to='/'>
                            <Title style={{ fontSize: "25px" }}> MeetDeals </Title>
                        </Link>
                    </div>
                </Col>
                <Col span={10} className='Homeheader_Buttons'>
                    <Link to='/login'>
                        <Button type="primary" icon={<UserOutlined />} size={'medium'} style={{ margin: "0 5px" }}>
                            sign in
                        </Button>
                    </Link>

                </Col>
            </Row>

        </header>
    )
}

export default HomeHeader;







