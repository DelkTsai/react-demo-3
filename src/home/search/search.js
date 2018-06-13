import React from 'react';
import search from '../search/search.css'
class Search extends React.Component{
    render(){
        return(
            <div className='Search'>
                <div className='Search_left'>
                    <i className='iconfont icon-shouhuodizhi'></i>
                    <span>合肥</span>
                </div>
                <div className='Search_right'>
                    <input type='text' placeholder='搜索你的职位'></input>
                    <i className='iconfont icon-sousuo'></i>
                </div>
            </div>
        )
    }
}

export default Search