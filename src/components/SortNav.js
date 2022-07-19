import React, { useContext } from 'react'
import { Typography, Breadcrumb, Dropdown } from 'antd';
import SortItem from './SortItem';

const { Text } = Typography;

function SortNav() {
    
    return (
        <Breadcrumb className='sortNav' style={{ cursor: 'pointer' }}>
            <Breadcrumb.Item  >
                <Dropdown overlay={<SortItem
                    field1={'From Highest'}
                    field2={'From Lowest'}
                    field3={'Show All'}
                    filter = {'price'}
                />}
                    placement="bottomLeft" arrow >
                    <Text strong style={{ display: 'inline' }}>Price</Text>
                </Dropdown>

            </Breadcrumb.Item>
            <Breadcrumb.Item >
                <Dropdown overlay={<SortItem
                    field1={'Most Recent'}
                    field2={'The Forgotten'}
                    field3={'All'} 
                    filter = {'date'}/>}
                    placement="bottomLeft" arrow >
                    <Text strong style={{ display: 'inline' }}>Date</Text>
                </Dropdown>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Dropdown overlay={<SortItem
                    field1={'Closest'}
                    field2={'Farthest'}
                    field3={'All'} 
                    filter = {'location'}
                    />}
                    placement="bottomLeft" arrow>
                    <Text strong style={{ display: 'inline' }}>Location</Text>
                </Dropdown>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Dropdown overlay={<SortItem
                    field1={'5 Stars'}
                    field2={'4 Stars'}
                    field3={'All'} 
                    filter = {'rating'}
                    />} placement="bottomLeft" arrow>
                    <Text strong style={{ display: 'inline' }}>Rating</Text>
                </Dropdown>
            </Breadcrumb.Item>
        </Breadcrumb>


    )
}

export default SortNav