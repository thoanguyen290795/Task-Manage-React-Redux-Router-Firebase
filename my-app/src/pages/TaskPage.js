import React, { Component } from 'react';
import {connect} from 'react-redux';
import TaskDoingList from './../Components/TaskDoingList'
import TaskFinishList from './../Components/TaskFinishList';
import TaskFinishListAdmin from './../Components/TaskFinishListAdmin';
class TaskPage extends Component {
    render() {
        let {user} = this.props;
        return (
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
               <TaskDoingList user={user}/>
               </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
               {this.showtaskFinishList(user)}
              </div>

          </div>
        </div>
          
        );
    }
    showtaskFinishList(user){
        if(user.info.isAdmin === true){
            return <TaskFinishListAdmin user={user}/>
        } else {
            return <TaskFinishList user={user}/>
        }
    }
}
const mapStateToProps = (state)=>{
    return {
      user:state.user
    }
  }
  export default connect(mapStateToProps,null)(TaskPage)

