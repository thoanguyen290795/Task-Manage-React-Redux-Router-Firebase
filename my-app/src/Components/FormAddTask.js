import React, { Component } from 'react';
import {tasksRef} from '../firebase';
import {connect} from 'react-redux';
import {actChangeNotify} from './../actions/index';
import * as notify from './../constants/Notify'; 
class FormAddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {task: ''};
  }

  handleChange = (event) => {
    this.setState({task: event.target.value});
  }

  handleSubmit = (event) => {
    let {task} = this.state; 
    let {email} = this.props.user.info;
    tasksRef.push({
      name:task,
      email
    });
    this.props.handleSubmit(notify.NOTI_TYPE_SUCESS,notify.NOTI_ADD_TASK_TITLE,notify.NOTI_ADD_TASK_MESSAGE)
    this.setState({
      task:''
    })
    event.preventDefault();
  }
    render() {
      
        return (
            <div>
                 <form className="form-inline" onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <input type="text" value={this.state.task} onChange={this.handleChange}  name="task" className="form-control" />
                      </div>
                      <button type="submit" className="btn btn-info">Add</button>
                    </form>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    handleSubmit:(style,title,content)=>{
      dispatch(actChangeNotify(style,title,content))
    }
  }
}


export default connect(null,mapDispatchToProps)(FormAddTask)
