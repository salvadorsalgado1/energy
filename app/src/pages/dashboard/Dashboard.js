import React from 'react';
import Container from '@mui/material/Container';
import ModulesList from './ModulesList'
import '../dashboard/styles.css'

class Dashboard extends React.Component{
    render(){
        return(
          <div className="dashboard">
            <Container>
              <h1>Dashboard</h1>
              <ModulesList/>
            </Container>
          </div>
        )
    }
}

export default Dashboard