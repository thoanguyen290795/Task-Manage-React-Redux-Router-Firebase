import React, { Component } from 'react';
import {connect} from 'react-redux';
import TaskFinishItemAdmin from './../Components/TaskFinishItemAdmin';
import {tasksCompletedRef} from './../firebase';
import {actChangeNotify} from './../actions/index';
import * as notify from './../constants/Notify'; 
class TaskFinishListAdmin extends Component {
    constructor(props){
        super(props);
        this.state={
          items:[],        
        }
      }
      componentDidMount(){
        tasksCompletedRef.on('value',items =>{
          let data = [];
        items.forEach(item=>{
          const {email,name} = item.val();
          data.push({email,name,key:item.key})
        })
        this.setState({
          items:data
        })
        })}
        componentWillUnmount(){
          this.setState = (state,callback)=>{
            return;
        }
        }
        handleClear = () =>{
          tasksCompletedRef.set([])
          this.props.changeNotify(notify.NOTI_TYPE_WARNING,notify.NOTI_CLEARALL_TASK_TITLE,notify.NOTI_CLEARALL_TASK_MESSAGE)
        }
      
        render() {
          let {items} = this.state;  
            return (
               
                     <div className="panel panel-success">
                      <div className="panel-heading">
                        <h3 className="panel-title">Task Finish</h3></div>
                      <div className="panel-body">
                       {this. showElementBody(items)}
                      </div>
                      <div className="panel-footer text-right">
              <button onClick={this.handleClear} type="button" className="btn btn-danger mt-3">Clear All</button>
                    </div>
                    </div>
            );
        }
      
        showElementBody(items,isAdmin){
          let xhml = null;
          if(items.length >0){
            xhml = items.map((item,index)=>{
                return  <TaskFinishItemAdmin changeNotify={this.props.changeNotify} key={index} item={item} index={index}/>          
            })
            return xhml 
          } else {
            return <h4>Loading</h4>}
        }
    }

    
    const mapDispatchToProps = (dispatch)=>{
      return {
        changeNotify:(style,title,content)=>{
          dispatch(actChangeNotify(style,title,content))
        }
      }
}
export default connect(null,mapDispatchToProps)(TaskFinishListAdmin)

