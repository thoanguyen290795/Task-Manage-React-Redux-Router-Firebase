import React, { Component } from 'react';
import {tasksCompletedRef} from './../firebase';
import {actChangeNotify} from './../actions/index';
import {connect} from 'react-redux';
import * as notify from './../constants/Notify'; 
class TaskFinishItemAdmin extends Component {
    onDelete=(key)=>{
        tasksCompletedRef.child(key).remove();
        this.props.changeNotify(notify.NOTI_TYPE_WARNING,notify.NOTI_DELETE_TASK_TITLE,notify.NOTI_DELETE_TASK_MESSAGE)
       
    }
    render() {
        let item = {name:'',email: '',key:''}; 
        item = (this.props.item !== undefined)? this.props.item:item; 

        return (
                 <li className="list-group-item">
                        <p className="task">{item.name}</p><span className="author"><span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;{item.email}</span>
                        <button onClick={()=>this.onDelete(item.key)}className="btn-danger float-right">Delete</button>
                </li>
        );
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
      changeNotify:(style,title,content)=>{
        dispatch(actChangeNotify(style,title,content))
      }
    }
  }
  export default connect(null,mapDispatchToProps)(TaskFinishItemAdmin)


