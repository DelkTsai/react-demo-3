import React from 'react'
import content from './content.css'
class Content extends React.Component{
    render(){
        return(
            <div>
                <div className='content'>
                    <i className='iconfont icon-dianzan1'></i>
                    <span>为你精选的好职位</span>
                </div>
                <div className='content_box'>
                    <ul className='content_box_ul'>
                        <li className='content_box_ul_li'>
                            <div className='content_box_ul_li_left'>
                                <h3>Web前端开发</h3>
                                <span>安徽麦田科技有限公司</span>
                            </div>
                            <div className='content_box_ul_li_right'>
                                <span className='price'>4.5-6千/月</span>
                                <span className='region'>合肥-政务区</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Content;