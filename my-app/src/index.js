import React from 'react';
import ReactDOM from 'react-dom';
import App from './houtai/App/app';

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

if(module.hot){
    module.hot.accept();
}

