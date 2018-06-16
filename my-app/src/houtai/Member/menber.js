import React, { Component } from 'react';

import '../css/huiyuan.css';
import '../css/global.css';
import '../css/tools.css';

class MenBer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <section className="content" id="content">
                    <header>
                        <h3>会员管理</h3>
                        <span>会员信息摘要</span>
                    </header>
                    <div className="table">
                        <div className="fun">
                            <span>新增</span>
                            <span>批量删除</span>
                        </div>
                        <div className="add">
                            <label>姓名:</label><input type="text" className="name" />
                            <label>性别:</label>
                            <select>
                                <option>男</option>
                                <option>女</option>
                            </select>
                            <label>年龄:</label><input type="text" className="age" />
                            <label>手机:</label><input type="text" />
                            <label>QQ:</label><input type="text" />
                            <label>微信:</label><input type="text" />
                            <button>提交</button>
                        </div>
                        <table align="center" border="1">
                            <thead>
                                <tr>
                                    <th>编号</th>
                                    <th>名字</th>
                                    <th>性别</th>
                                    <th>年龄</th>
                                    <th>QQ</th>
                                    <th>微信</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>John</td>
                                    <td>boy</td>
                                    <td>18</td>
                                    <td>2567081986</td>
                                    <td>2567081986</td>
                                    <td><button>更改</button><button>删除</button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>John</td>
                                    <td>boy</td>
                                    <td>18</td>
                                    <td>2567081986</td>
                                    <td>2567081986</td>
                                    <td><button>更改</button><button>删除</button></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>John</td>
                                    <td>boy</td>
                                    <td>18</td>
                                    <td>2567081986</td>
                                    <td>2567081986</td>
                                    <td><button>更改</button><button>删除</button></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>John</td>
                                    <td>boy</td>
                                    <td>18</td>
                                    <td>2567081986</td>
                                    <td>2567081986</td>
                                    <td><button>更改</button><button>删除</button></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>John</td>
                                    <td>boy</td>
                                    <td>18</td>
                                    <td>2567081986</td>
                                    <td>2567081986</td>
                                    <td><button>更改</button><button>删除</button></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>John</td>
                                    <td>boy</td>
                                    <td>18</td>
                                    <td>2567081986</td>
                                    <td>2567081986</td>
                                    <td><button>更改</button><button>删除</button></td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>John</td>
                                    <td>boy</td>
                                    <td>18</td>
                                    <td>2567081986</td>
                                    <td>2567081986</td>
                                    <td><button>更改</button><button>删除</button></td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>John</td>
                                    <td>boy</td>
                                    <td>18</td>
                                    <td>2567081986</td>
                                    <td>2567081986</td>
                                    <td><button>更改</button><button>删除</button></td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>John</td>
                                    <td>boy</td>
                                    <td>18</td>
                                    <td>2567081986</td>
                                    <td>2567081986</td>
                                    <td><button>更改</button><button>删除</button></td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>John</td>
                                    <td>boy</td>
                                    <td>18</td>
                                    <td>2567081986</td>
                                    <td>2567081986</td>
                                    <td><button>更改</button><button>删除</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        )
    }
}
 
export default MenBer;