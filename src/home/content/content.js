import React from 'react'
import content from './content.css'
import axios from 'axios'
import { METHODS } from 'http';
class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: []
        }
    }
    componentDidMount() {
        var _this = this
        axios.get("http://p6acqdvet.bkt.clouddn.com/data.json").then(function (res) {
            console.log(res)
            _this.setState({
                item: res.data.data
            })
        })
    }

    render() {
        return (
            <div className='C'>
                <div className='content'>
                    <p className='content_left'></p>
                    <i className='iconfont icon-dianzan1'></i>
                    <span>为你精选的好职位</span>
                    <p className='content_right'></p>
                </div>
                <div className='content_box'>
                    <ul className='content_box_ul'>
                        {
                            this.state.item.map(function (list, index) {
                                return (
                                    <li className='content_box_ul_li'>
                                        <div className='content_box_ul_li_left'>
                                            <h3>{list.title}</h3>
                                            <span>{list.company}</span>
                                        </div>
                                        <div className='content_box_ul_li_right'>
                                            <span className='price'>{list.price}/月</span>
                                            <span className='region'>{list.region}</span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                        
                    </ul>
                    <div className='more'>更多职位</div>

                </div>
            </div>
        )
    }
}

export default Content;