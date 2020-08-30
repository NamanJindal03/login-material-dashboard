import React, {useState} from 'react'
import { Redirect} from 'react-router-dom'
import '../../index.css'
const Signin = () =>{
    return(
        <>
            <h1 className="text-white">Login Page </h1>
            <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title">Edit Profile</h4>
                  <p className="card-category">Complete your profile</p>
                </div>
                <div className="card-body">
                  <form>
                    
                      <div className="col-md-3">
                        <div className="form-group">
                          <label className="bmd-label-floating">Username</label>
                          <input type="text" className="form-control"/>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="bmd-label-floating">Email address</label>
                          <input type="email" className="form-control"/>
                        </div>
                      </div>
                    <button type="submit" className="btn btn-primary pull-right">Update Profile</button>
                    <div className="clearfix"></div>
                  </form>
                </div>
              </div>
                      
        </>   
    )
}
export default Signin;
