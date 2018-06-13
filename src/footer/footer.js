import React from 'react';
import { Link } from 'react-router-dom';
import style from '../footer/footer.css'
class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <Link to="/">
                    <i className='iconfont icon-qingdan'></i>
                    <div>清单</div>
                </Link>
                <Link to="/complete">
                    <span className='iconfont icon-daibanrenwu'></span>
                    <div>完成</div>
                </Link>
            </div>
        );
    }
}

export default Footer;