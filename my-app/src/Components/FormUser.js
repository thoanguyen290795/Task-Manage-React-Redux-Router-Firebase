import React, { Component } from 'react';
import {firebaseApp} from './../firebase'; 
class FormUser extends Component {
    logOut = () =>{
        firebaseApp.auth().signOut();
    }
    render() {
        let user = this.props.user.info;
        let xhmlAdmin = (user.isAdmin === true)? <h4>Admin</h4>:'';
        return (

                 <div>
                  <h4>{user.email}</h4>
        <h4>{user.uid}</h4>
        <h4>{user.website}</h4>
        <h4>{user.isAdmin}</h4>
                  <button onClick={this.logOut}type="submit" className="btn btn-success">Logout</button>
                </div>

        );
    }
}

export default FormUser;
