import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import './index.css';



import App from './App';


const app=(
    <HashRouter>
    <App/>
    </HashRouter>
)


ReactDOM.render(app,document.getElementById('root'));