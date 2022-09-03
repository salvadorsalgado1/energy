import React from 'react';
import { Link } from "react-router-dom";

class Landing extends React.Component{
    render(){
        return(
            <div><h1>Landing Page</h1>
                
            <p><Link to="dashboard">Dashboard</Link></p></div>
            
        )
    }
}

export default Landing