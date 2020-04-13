import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route,NavLink,Link} from "react-router-dom";
const menus = [
{
  to:'/',
  name:'Task Page',
  exact: true
},
{
  to:'/user',
  name:'User Page',
  exact: false
},
{
  to:'/signin',
  name:'Signin Page',
  exact: false
},
{
  to:'/signup',
  name:'Sign Up',
  exact: false
}
]

const MenuLink = ({label,to,activeOnlyWhenExact}) =>{
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({match})=>{
      let active = match?'active':'';
      return (
        <li className={active}>
           <Link  className="nav-link" to={to}>{label}</Link>
        </li>
      )
      }}/>
  )
  }
export class Menu extends React.Component{
render(){
  return (
    
    <nav className="navbar bg-light pt-3 pb-3">
    <ul className="nsav navbar-nav">
      {this.showMenus(menus)}   
    </ul>
  </nav>
  )
}
showMenus(menus){
  let xhml = null;
  if(menus !== null && menus.length > 0) {
    xhml = menus.map((menu,index)=>{
      return   <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
    })
  }
  return xhml
}
}
export default Menu;
