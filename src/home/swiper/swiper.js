import React from 'react';
import swiper from './swiper.css'

class Swiper extends React.Component {
    render() {
        return (
            <div>
                <div className='swiper'>
                    <img src='https://img01.51jobcdn.com/im/mkt/tg/2018banner/lp_wx/750_300_2.jpg' />
                </div>
                <div className='list'>
                    <ul className='list_ul'>
                        <li className='list_li'>
                            <img src='http://p6563v2ck.bkt.clouddn.com/WX20180613-182604@2x.png' />
                            <span>职位搜索</span>
                        </li>
                        <li className='list_li'>
                            <img src='http://p6563v2ck.bkt.clouddn.com/WX20180613-183644@2x.png' />
                            <span>谁看过我</span>
                        </li>
                        <li className='list_li'>
                            <img src='http://p6563v2ck.bkt.clouddn.com/WX20180613-183802@2x.png' />
                            <span>申请记录</span>
                        </li>
                        <li className='list_li'>
                            <img src='http://p6563v2ck.bkt.clouddn.com/WX20180613-183814@2x.png' />
                            <span>校园招聘</span>
                        </li>
                        <li className='list_li'>
                            <img src='http://p6563v2ck.bkt.clouddn.com/WX20180613-183819@2x.png' />
                            <span>求职攻略</span>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default Swiper;