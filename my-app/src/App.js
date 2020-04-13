import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import routes from './routes'; 
import Title from './Components/Title'; 
import Menu from './Components/Menu'; 
import Notify from './Components/Notify'; 
class App extends Component {
  render() {
    return (
    <Router>
      <div className="container">
        <Title/>
        <Notify/>
        <div className="row">
          <div className="col-xs-2 col-md-2 col-lg-2">
          <Menu/>
          </div>
          <div className="col-xs-10 col-md-10 col-lg-10">
      {this.showRoute(routes)}
          </div>
        </div>
      </div>
    </Router>
    );
  }
showRoute(routes){
  let xhml = null; 
  if(routes.length > 0 && routes !== null){
    xhml = routes.map((route,index)=>{
      return <Route key={index} exact={route.exact} path={route.path} component={route.main}/>
    })
  }
return <Switch>{xhml}</Switch>
}
}

export default App;

