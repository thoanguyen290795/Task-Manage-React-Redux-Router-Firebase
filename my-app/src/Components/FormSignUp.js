import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actChangeNotify} from './../actions/index';
import {firebaseApp,usersRef} from './../firebase'; 
import * as notify from './../constants/Notify'; 
class FormSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
    website:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    let {email,password,website} = this.state;
    firebaseApp.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(data=>{
      usersRef.child(data.user.uid).set({
        website,
        isAdmin:false,
        uid:data.user.uid
      });
      this.props.changeNotify(notify.NOTI_TYPE_SUCESS,notify.NOTI_SIGNUP_SUCCESSFULL_TITLE,notify.NOTI_SIGNUP_SUCCESSFULL_MESSAGE)
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage);
      this.props.changeNotify(notify.NOTI_TYPE_DANGER,notify.NOTI_SIGNUP_FAIL_TITLE,errorMessage)
    })
    event.preventDefault();
  }
    render() {
        return (
<div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">Sign Up</h3></div>
              <div className="panel-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-6">
                      <input type="text" value={this.state.email} onChange={this.handleChange}
                       name="email" className="form-control" 
                       placeholder="Email" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
                    <div className="col-sm-6">
                      <input type="password"  value={this.state.password} onChange={this.handleChange}
                      name="password" className="form-control" 
                      placeholder="Password" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-sm-2 control-label">Website</label>
                    <div className="col-sm-6">
                      <input type="text"  name="website" value={this.state.website} onChange={this.handleChange}
                      className="form-control" 
                      placeholder="Website" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-6">
                      <button type="submit" className="btn btn-success">Sign up</button>
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
export default connect(null,mapDispatchToProps)(FormSignUp)

