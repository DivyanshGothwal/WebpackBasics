import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import Pizza from './containers/Pizza';
import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent';
//import('./containers/Pizza');

const asyncPizza  = asyncComponent(()=>{

return import('./containers/Pizza');
})

class App extends Component{
    render(){
        return(
            <div>
                <div>
                        <Link to="/">Users</Link> |
                        <Link to="/pizza">Pizza</Link>

                </div>
                <div>
                    <Route path="/" exact component={Users} /> 

                    <Route path="/pizza" exact component={Pizza} />
                </div>
            </div>
        )
    }
}

export default App;