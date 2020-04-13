import React, { Component } from 'react';
import TaskDoingItem from './../Components/TaskDoingItem';
import FormAddTask from './../Components/FormAddTask';
import {tasksRef} from '../firebase';
class TaskDoingList extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[]
    }
  }

 componentDidMount(){
    tasksRef.on('value',items =>{
  let data = [];
items.forEach(item=>{
  const {email,name} = item.val();
  data.push({email,name,key:item.key})
})
this.setState({
  items:data
})
})
  }
    render() {
      let {items} = this.state;
      let {user} = this.props;
        return (
                 <div className="panel panel-info">
                  <div className="panel-heading">
                    <h3 className="panel-title">Task Doing</h3></div>
                  <div className="panel-body">
                    {this.showElementBody(items)}
                  </div>
                  <div className="panel-footer text-right">
                   <FormAddTask user={user}/>
                  </div>
                </div>

        );
    }

    showElementBody(items){
      let xhml = null; 
      if(items!==null && items.length > 0){
        xhml = items.map((item,index)=>{
          return <TaskDoingItem key={index} item={item} index={index}/>
        })
      }
    return  xhml
    
    }
}

export default TaskDoingList;
