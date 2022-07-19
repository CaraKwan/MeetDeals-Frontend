import React, { useContext, useEffect } from 'react'
import {
    List,
    Card
} from 'antd';
import 'antd/dist/antd.css';
import '../index.css';
import { useAuth } from '../Messenger/AuthContexts';
import { DataContext } from '../App';
import Item from './Item'
const { Meta } = Card;


function Content() {

    const { user } = useAuth();
    
    const {data}= useContext(DataContext);
    const [items] = data;
    // useEffect(() =>{
    //     <div></div>
    // },[items])
    

    return (
        
        <div className='contents'>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={items}
                renderItem={item => {
                    return <Item key={item.item_id} item={item}/>
                }
                }
            />
        </div>
    )
}

export default Content