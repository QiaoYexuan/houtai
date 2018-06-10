import React, { Component } from 'react';
import '../css/global.css';
import '../css/tools.css';

class ToHead extends Component {
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
            </div>
        )
    }
}
 
export default ToHead;