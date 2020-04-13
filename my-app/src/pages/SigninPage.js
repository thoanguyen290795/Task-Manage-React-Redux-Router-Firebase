import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from "react-router-dom";
import FormLogin from './../Components/FormLogin'
class SigninPage extends Component {
    render() {
        let {user} = this.props; 
        if(user.isLogin === true){
          return <Redirect to="/user"/>}
        return (
        <div>
       <FormLogin/>
      </div>
 
           
        );
    }
}
const mapStateToProps = (state)=>{
    return {
      user:state.user
    }
  }
  export default connect(mapStateToProps,null)(SigninPage)

