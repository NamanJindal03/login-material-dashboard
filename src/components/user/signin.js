import React, {useState} from 'react'
import { Redirect} from 'react-router-dom'
import '../../index.css';

import {signin} from './user_logic'
const Signin = () =>{
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        didRedirect: false
    })
    const {email, password, error, loading, didRedirect} = values;

    const handleChange = name => event =>{
        setValues({...values, error:false, [name]:event.target.value})
    }
    const errorMessage = () => (
        <div className="row">
            <div className="col-md-8 offset-sm-2 text-left">
                <div className="alert alert-danger" role="alert" style={{display: error ? "" : "none"}}> {error}</div>    
            </div>
        </div>
    )
    const onSubmit = event => {
        event.preventDefault();
        setValues({...values, error: false, loading: true})
        signin({email, password})
            .then(data => {
                if(data.error){
                    setValues({...values, error: data.error, loading: false})
                }else{   
                    setValues({
                        ...values,
                        didRedirect:true
                    })  
                }
                return;
            })
            .catch(err=>{
                setValues({...values, error: err, loading: false})
                // console.log("signin request failed");
                // console.log(err);
            })
    }
    const performRedirect = () =>{
        if(didRedirect){
            //return <Redirect to ="https://www.google.com" />
            window.location.href = 'https://www.google.com'; 
            return null;
        }
    }
    const loadingMessage = () => {
        return(
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        )
    }
    const signInForm = () =>{
        return(
            
            <div className="card col-md-6 offset-sm-3">
                <div className="card-header card-header-success">
                  <h2 className="card-title">Log In</h2>
                  <h5 className="card-title">Welcome Back, Doctor</h5>
                </div>
                <div className="card-body ">
                  <form>
                        {errorMessage()}
                        
                      <div className="col-md-8 offset-sm-2">
                        <div className="form-group has-success">
                          <label className="bmd-label-floating">Email Address</label>
                          <input type="email" className="form-control" onChange={handleChange("email")} value={email}/>
                        </div>
                      </div>
                      <div className="col-md-8 offset-sm-2">
                        <div className="form-group has-success">
                          <label className="bmd-label-floating">Password</label>
                          <input type="password" className="form-control" onChange={handleChange("password")} value={password}/>
                        </div>
                      </div>
                    <div className="text-center">
                        <button onClick={onSubmit} type="submit" className="btn btn-success ">Login</button>
                    </div>
                    
                  </form>
                </div>
              </div>
        )
    }
    return(
        <>
            {loadingMessage()}
            {signInForm()}
            {performRedirect()}
                      
        </>   
    )
}
export default Signin;
