import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Footer from '../footer/footer'
import Swiper from '../home/swiper/swiper'
import Search from '../home/search/search'
import Content from '../home/content/content'
import home from '../home/home.css'
import axios from 'axios'
class Home extends React.Component {
    
    render() {
       
        var _this = this
        return ( 
            <div className='home'> 
                <Search/>
                <Swiper/>
                <Content/>
                <Footer/>
                
            </div>
        );
    }
}

export default Home;