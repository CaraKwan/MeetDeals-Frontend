import React from 'react'
import SortNav from './SortNav';
import MainHeader from './MainHeader';
import HomeHeader from './HomeHeader';
import { useAuth } from '../Messenger/AuthContexts';
import '../styles/Main.css'
import '../styles/Home.css'
import 'antd/dist/antd.min.css';
import 'antd/dist/antd.less';


function Header() {
    const { user } = useAuth();
    console.log(user);
    return (
        <div>
            {user?  <MainHeader />:<HomeHeader />  }
            <SortNav />
        </div>
    )
}

export default Header