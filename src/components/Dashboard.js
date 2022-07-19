
import React, {useState} from 'react'
import { Modal, Card ,Button } from 'antd';
import { SearchOutlined, UploadOutlined, SettingOutlined, TransactionOutlined, ShoppingCartOutlined, FolderOpenOutlined } from '@ant-design/icons';
import '../styles/UploadForm.css'
import UploadForm from "./UploadForm";
import 'antd/dist/antd.css';
import { Link} from 'react-router-dom';



const gridStyle = {
    width: '33.3%',
    textAlign: 'center',
};

function Dashboard() {
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

    return (
        <div>
            <Card title={< div style={{ textAlign: "center" }}> Welcome! </div>}>
                <Link to='/chats'>
                    <Card.Grid style={gridStyle}>
                        <Button type="dashed" icon={<SearchOutlined />}>
                        </Button>
                        <br />Inbox</Card.Grid>
                </Link>


                <Card.Grid style={gridStyle}>
                    <Button type="dashed" icon={<SettingOutlined />}></Button>
                    <br />Settings</Card.Grid>

                <Card.Grid style={gridStyle}>
                    <Button type="dashed" icon={<ShoppingCartOutlined />}></Button>
                    <br />Cart</Card.Grid>

                <Card.Grid style={gridStyle}>
                    <Button type="dashed" icon={<UploadOutlined />} onClick={showModal}></Button>
                    <br />Upload and Sell! <br /> <br />
                    <Modal title="Upload_modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <UploadForm/>
                    </Modal>
                </Card.Grid>


                <Card.Grid style={gridStyle}>
                    <Button type="dashed" icon={<TransactionOutlined />}></Button>
                    <br />Transaction History</Card.Grid>

                <Card.Grid style={gridStyle}>
                    <Button type="dashed" icon={<FolderOpenOutlined />}></Button>
                    <br />My Listings <br /> <br /> </Card.Grid>

            </Card>



        </div>
    )
}

export default Dashboard

