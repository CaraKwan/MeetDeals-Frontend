import React from 'react'
import 'antd/dist/antd.min.css';
import 'antd/dist/antd.less';
import Content from './Content';
import '../styles/Main.css'
import Login from './Login'
import Chats from '../Messenger/Chats'

import { Routes, Route } from 'react-router-dom';


function Main() {
    return (
        <div className='main'>
                <Routes>
                    <Route exact path="/chats" element={<Chats />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/" element={<Content />} />
                </Routes>
 
          
        </div >
    )
}

export default Main