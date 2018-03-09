import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { createHashHistory } from 'history';

// 引入page
import Foot from '../pages/footer';
import Header from '../pages/header'


 const routes= (
    <BrowserRouter>
        <div>
            <Header/>
            <Route path='/foot' component={Foot}></Route>
             {/* 公共组件写在这里 */}
            <Foot />
        </div>
       
    </BrowserRouter>
)

export default class Root extends React.Component{
    render(){
        return routes;
    }
}
