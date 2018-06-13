import React from 'react';
import { Link } from 'react-router-dom';
import style from '../footer/footer.css'
class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <Link to="/">
                    <i className='iconfont icon-qingdan'></i>
                    <div>首页</div>
                </Link>
                <Link to="/news">
                    <span className='iconfont icon-daibanrenwu'></span>
                    <div>完成</div>
                </Link>
                <Link to="/resume">
                    <span className='iconfont icon-daibanrenwu'></span>
                    <div>简历</div>
                </Link>
                <Link to="/my">
                    <span className='iconfont icon-daibanrenwu'></span>
                    <div>我的</div>
                </Link>
                
            </div>
        );
    }
}

export default Footer;