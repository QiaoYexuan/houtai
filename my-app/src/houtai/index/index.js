import React,{Component} from 'react';
import EchartsTest from './echarts';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <section className="content" id="content">
                <header>
                    <h3>仪表板</h3>
                    <span>应用程序摘要</span>
                </header>
                <nav className="subnav">
                    <a href="javascript:;">Home</a>
                    <span>/</span>
                    <a href="javascript:;">Library</a>
                    <span>/</span>
                    <a href="javascript:;" className="active">Data</a>
                </nav>
                <ul className="form-pic">
                    <li>
                        <div className="pic"><img src="images/form.png" alt="图表"/></div>
                        <div className="number">
                            <span className="fonts">0</span>
                            <span className="title">Daily</span>
                        </div>
                    </li>
                    <li>
                        <div className="pic"><img src="images/pay.png" alt="购物车"/></div>
                        <div className="number">
                            <span className="fonts">0</span>
                            <span className="title">Daily</span>
                        </div>
                    </li>
                    <li>
                        <div className="pic"><img src="images/take.png" alt="聊天"/></div>
                        <div className="number">
                            <span className="fonts">0</span>
                            <span className="title">Daily</span>
                        </div>
                    </li>
                    <li>
                        <div className="pic"><img src="images/pepoles.png" alt="人群"/></div>
                        <div className="number">
                            <span className="fonts">0</span>
                            <span className="title">Daily</span>
                        </div>
                    </li>
                </ul>
                {/* <div className="line-chart" id="line-chart"></div> */}
                <EchartsTest />

                <ul id="percent" className="percent">
                    <li>
                        <span>顾客</span>
                        <div id="shopper" className="shopper"></div>
                    </li>
                    <li>
                        <span>销售</span>
                        <div id="sell" className="sell"></div>
                    </li>
                    <li>
                        <span>利润</span>
                        <div id="gain" className="gain"></div>
                    </li>
                    <li className="margin0">
                        <span>访问次数</span>
                        <div id="degree" className="degree"></div>
                    </li>
                </ul>
                <div className="bar-cook">
                    <div className="bar" id="bar"></div>
                    <div className="cook" id="cook"></div>
                </div>
                <div className="area" id="area"></div>
                <div className="tasks-table">
                    <div className="tasks">
                        <h3>任务面板</h3>
                        <ul className="shuju">
                            <li>
                                <div>
                                    <label></label>
                                    <a href="javascript:;">Order 392 shipped</a>
                                </div>
                                <div className="time">3 minutes ago</div>
                            </li>
                            <li>
                                <div>
                                    <label></label>
                                    <a href="javascript:;">Order 392 shipped</a>
                                </div>
                                <div className="time">3 minutes ago</div>
                            </li>
                            <li>
                                <div>
                                    <label></label>
                                    <a href="javascript:;">Order 392 shipped</a>
                                </div>
                                <div className="time">3 minutes ago</div>
                            </li>
                            <li>
                                <div>
                                    <label></label>
                                    <a href="javascript:;">Order 392 shipped</a>
                                </div>
                                <div className="time">3 minutes ago</div>
                            </li>
                            <li>
                                <div>
                                    <label></label>
                                    <a href="javascript:;">Order 392 shipped</a>
                                </div>
                                <div className="time">3 minutes ago</div>
                            </li>
                            <li>
                                <div>
                                    <label></label>
                                    <a href="javascript:;">Order 392 shipped</a>
                                </div>
                                <div className="time">3 minutes ago</div>
                            </li>
                        </ul>
                        <a href="javascript:;" className="more">More Tasks</a>
                    </div>
                    <div className="table">
                        <h3>数据表格</h3>
                        <table align="center" border="1">
                            <thead>
                                <tr>
                                    <th>编号</th>
                                    <th>名字</th>
                                    <th>性别</th>
                                    <th>用户名</th>
                                    <th>电子邮件</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>John</td>
                                    <td>boy</td>
                                    <td>John14582</td>
                                    <td>name@site.com</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>John</td>
                                    <td>boy</td>
                                    <td>John14582</td>
                                    <td>name@site.com</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>John</td>
                                    <td>boy</td>
                                    <td>John14582</td>
                                    <td>name@site.com</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>John</td>
                                    <td>boy</td>
                                    <td>John14582</td>
                                    <td>name@site.com</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>John</td>
                                    <td>boy</td>
                                    <td>John14582</td>
                                    <td>name@site.com</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>John</td>
                                    <td>boy</td>
                                    <td>John14582</td>
                                    <td>name@site.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <footer></footer>
            </section>
            <footer className="foot"></footer>
            </div>
        );
    }
}

export default Index;