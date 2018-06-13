import React from 'react';
import { Link } from 'react-router-dom';
import style from '../footer/footer.css'
class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <Link to="/">
                    <i className='iconfont icon-shouye2'></i>
                    <div>首页</div>
                </Link>
                <Link to="/news">
                    <span className='iconfont icon-xiaoxi'></span>
                    <div>消息</div>
                </Link>
                <Link to="/resume">
                    <span className='iconfont icon-icon--1'></span>
                    <div>简历</div>
                </Link>
                <Link to="/my">
                    <span className='iconfont icon-mine'></span>
                    <div>我的</div>
                </Link>
                
            </div>
        );
    }
}

export default Footer;