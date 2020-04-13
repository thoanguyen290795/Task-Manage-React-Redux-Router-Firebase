import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from "react-router-dom";
import FormUser from './../Components/FormUser';
class UserPage extends Component {
    render() {
      let {user} = this.props; 
      if(user.isLogin === false){
        return <Redirect to="/signin" />}
        return (                    
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">User</h3></div>
              <div className="panel-body">
               <FormUser user={user}/>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
    }
}
const mapStateToProps = (state)=>{
  return {
    user:state.user
  }
}
export default connect(mapStateToProps,null)(UserPage)
