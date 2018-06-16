import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import MenBer from '../Member/menber'
import '../css/index.css';
import '../css/global.css';
import '../css/tools.css';
import Index from '../index/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <header className="head">
                    <h1>MASTER</h1>
                    <ul className="fun">
                        <li>
                            <span className="icon"></span>
                            <span className="down"></span>
                        </li>
                        <li>
                            <span className="icon bgp-42"></span>
                            <span className="down"></span>
                        </li>
                        <li>
                            <span className="icon  bgp-28"></span>
                            <span className="down"></span>
                        </li>
                        <li>
                            <span className="icon  bgp-12"></span>
                            <span className="down"></span>
                        </li>
                    </ul>
                </header>
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
                <Route exact path="/" component={Index}></Route>
            </div>
        )
    }
}
 
export default App;