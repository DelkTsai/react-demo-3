import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import Footer from '../footer/footer'
import axios from 'axios'
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            item:[]
        }

        // 这个绑定是必要的，使`this`在回调中起作用
        this.btn=this.btn.bind(this)
    }

    // 请求json数据
    componentWillMount() {
        var _this=this
        axios.get("http://p6acqdvet.bkt.clouddn.com/_data_json.json").then(function(res){
            _this.setState({
                item:res.data.json
            })
        })
    }
    btn(item,index){
       this.props.history.push({
            pathname:'/detail',
            state:{
                id:item.id,
                name:item.name,
                price:item.price
            }
       })

    }
    render() {
        var _this=this
        return (
            <div>
                {
                    this.state.item.map(function(list,index){
                        return(
                            <div key={list.id} onClick={_this.btn.bind(this,list,index)}>
                                <p>{list.name}</p>
                                <p>{list.price}</p>
                            </div>
                        ) 
                    })
                }
                <Footer />
            </div>
        );
    }
}

export default Home;