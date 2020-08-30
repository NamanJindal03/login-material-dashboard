import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Signin from './components/user/signin'
const Routes = () =>{
    return(
        <Router>
            
                <Switch>
                    <Route path="/sign-in" component={Signin} />
                </Switch>
            
        </Router>
    )
}
export default Routes;

