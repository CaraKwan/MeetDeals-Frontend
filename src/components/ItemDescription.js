import React from 'react'
import {
    Row, Col, Button, 
    Card, Image, Descriptions, Rate
} from 'antd';
import { Link } from 'react-router-dom';


function ItemDescription({ price, seller, description, location, sellerEmail, rating, title, img,login }) {
    return (
        <div className="site-card-wrapper">
            <Row gutter={12} equal-heights>
                <Col span={12} >
                    <Card title="Item Picture" bordered={false}>
                        <Image
                            preview={false}
                            src={img}
                        />
                    </Card>
                </Col>

                <Col span={12} >
                    <Card title="Item Description" bordered={false} >
                        {description}
                    </Card >
                </Col>

                <Col span={24}>
                    <Card title="" bordered={true}>
                        <Descriptions title={title}>
                            <Descriptions.Item label="Seller">{seller} </Descriptions.Item>
                            <Descriptions.Item label="Price">{price}</Descriptions.Item>
                            <p>Rating：<Rate disabled defaultValue={rating} /></p>
                            <Descriptions.Item label="Location">
                                {location}
                            </Descriptions.Item>
                        </Descriptions>


                        <Button type="dashed" block="false" disabled={!login}>
                            <Link to='/chats'>Send a message  </Link>
                        </Button>

                        <Button type="dashed" block="false" disabled={!login}>Add to court</Button>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ItemDescription