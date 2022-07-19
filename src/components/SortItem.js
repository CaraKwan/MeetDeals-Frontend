import React, { useContext } from 'react'
import { Menu, Button } from 'antd';
import { DataContext } from '../App';

function SortItem(props) {

    const { data, getData, setData } = useContext(DataContext);
    const [grabData] = getData;
    const [set] = setData;
    const [items] = data;

    const filter = props.filter;
    const hightToLow = () => {

        let copy = [...items];
        copy.sort(function (a, b) {

            switch (filter) {
                case 'price':
                    return b.price - a.price;
               
                case 'date':
                    return b.date - a.date;
                  
                case 'location':
                    return b.location - a.location;
                  
                case 'rating':
                    return b.location - a.location;
                 
            }
        })
        set(copy)
    }

    const lowToHigh = () => {

        let copy = [...items];
        copy.sort(function (a, b) {
        
            switch (filter) {
                case 'price':
                    return a.price - b.price;
                  
                case 'date':
                    return a.date - b.date;
                    
                case 'location':
                    return a.location - b.location;
                   
                case 'rating':
                    return a.location - b.location;
                   
            }
        })
        set(copy)
      
    }
    return (
        <Menu style={{ backgroundColor: '#CAFFFB' }}>
            <Menu.Item key={1}>
                <Button type="link" onClick={() => hightToLow()}>{props.field1}</Button>
            </Menu.Item >
            <Menu.Item key={2}>
                <Button type="link" onClick={() => lowToHigh()}>{props.field2}</Button>
            </Menu.Item>
            <Menu.Item key={3}>
                <Button type="link"> {props.field3}</Button>
            </Menu.Item>
        </Menu>

    )
}

export default SortItem