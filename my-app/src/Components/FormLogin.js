import React, { Component } from 'react';
import {firebaseApp} from './../firebase'; 
import {connect} from 'react-redux';
import {actChangeNotify} from './../actions/index';
import * as notify from './../constants/Notify'; 
class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:''

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.name === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
   let {email,password} = this.state;
   firebaseApp.auth()
   .signInWithEmailAndPassword(email, password)
   .then(data=>{
    this.props.changeNotify(notify.NOTI_TYPE_INFO,notify.NOTI_LOGIN_SUCCESSFULL_TITLE,notify.NOTI_LOGIN_SUCCESSFULL_MESSAGE)
   })
   .catch((error) =>{
    let errorCode = error.code;
    let errorMessage = error.message;
    this.props.changeNotify(notify.NOTI_TYPE_DANGER,notify.NOTI_LOGIN_FAIL_TITLE,errorMessage)
  });
    event.preventDefault();
  }
    render() {
        return (
                      <div className="container">
        <div className="row">
  
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">Sign In</h3></div>
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-6">
                      <input onChange={this.handleChange} value={this.state.email} type="text"  name="email" className="form-control" placeholder="Email"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label  className="col-sm-2 control-label">Password</label>
                    <div className="col-sm-6">
                      <input onChange={this.handleChange}  value={this.state.password}type="password"  name="password" className="form-control" placeholder="Password" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-6">
                      <button type="submit" className="btn btn-success">Sign in</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
            </div>
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
export default connect(null,mapDispatchToProps)(FormLogin)

