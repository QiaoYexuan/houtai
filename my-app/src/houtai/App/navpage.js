import React, { Component } from 'react';
import MenBer from '../Member/menber'
import {Route,Link} from 'react-router-dom'
import '../css/global.css';
import '../css/tools.css';

class ToNavPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <div>
                <ul className="navpage" id="navpage">
                    <Link to="/">
                        <li className="active">
                            <label className="color"></label>
                            <a href="javascript:;">数据统计</a>
                        </li>
                    </Link>
                    <Link to="/menber">
                        <li>
                            <label className="bgp-15"></label>
                            <a href="javascript:;">会员管理</a>
                        </li>
                    </Link>
                    <li>
                        <label className="bgp-30"></label>
                        <a href="javascript:;">图表</a>
                    </li>
                    <li>
                        <label className="bgp-45"></label>
                        <a href="javascript:;">标签和面板</a>
                    </li>
                    <li>
                        <label className="bgp-60"></label>
                        <a href="javascript:;">响应表</a>
                    </li>
                    <li>
                        <label className="bgp-75"></label>
                        <a href="javascript:;">形式</a>
                    </li>
                    <li>
                        <label className="bgp-90"></label>
                        <a href="javascript:;">多级下拉菜单</a>
                    </li>
                    <li>
                        <label className="bgp-105"></label>
                        <a href="javascript:;">空白页</a>
                    </li>
                </ul>
                <div className="block" id="block"><span className="right"></span></div>
                <Route exact path="/menber" component={MenBer}></Route>
            </div>
        )
    }
}
 
export default ToNavPage;