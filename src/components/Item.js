import React, { useState, useContext } from 'react'
import {
    List,
    Card, Image, Modal
} from 'antd';
import 'antd/dist/antd.css';
import '../index.css';
import ItemDescription from './ItemDescription';
import { useAuth } from '../Messenger/AuthContexts';
import { DataContext } from '../App';

const { Meta } = Card;


function Item({ item }) {
    const { user } = useAuth();

    // const [items] = useContext(DataContext);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = (e) => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <List.Item>
            <Card
                className='cardItems'
                hoverable
                cover={<Image
                    width={200}
                    src={item.image}
                />
                }
            >
                <Meta title={item.item_name} description={`$${item.price}`} onClick={showModal} />
            </Card>
            <Modal title={item.item_name} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <ItemDescription title={item.item_name} description={item.description}
                    location={item.zipcode} price={item.price}
                    seller={item.seller_name} sellerEmail={item.seller_email}
                    rating={item.seller_rating} img={item.image} login={user ? true : false} />
            </Modal>
        </List.Item>
    )
}

export default Item