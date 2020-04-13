import React, { Component } from 'react';
import {tasksCompletedRef} from '../firebase';
import {connect} from 'react-redux';
import {tasksRef} from '../firebase';
import {actChangeNotify} from './../actions/index';
import * as notify from './../constants/Notify'; 
class TaskDoingItem extends Component {
     handleCompleted=(item)=>{
        //remove khỏi task 
         tasksRef.child(item.key).remove();
        //add taskCOmpleted
        tasksCompletedRef.push(item); 
        this.props.handleCompleted(notify.NOTI_TYPE_SUCESS,notify.NOTI_COMPLETED_TASK_TITLE,notify.NOTI_COMPLETED_TASK_MESSAGE)
    }
    render() {
      let {item}= {name:'',email:''};
      item = (this.props.item !== '')? this.props.item:item;
        return (
          <ul className="list-group">  
                      <li className="list-group-item">
        <p className="task">{item.name}</p>
        <span className="author"><span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;{item.email}</span>
                        <button onClick={()=>this.handleCompleted(item)}type="button" className="btn btn-warning btn-xs float-right">Completed</button>
                      </li>
                    </ul>
        );
    }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    handleCompleted:(style,title,content)=>{
      dispatch(actChangeNotify(style,title,content))
    }
  }
}
export default connect(null,mapDispatchToProps)(TaskDoingItem)

