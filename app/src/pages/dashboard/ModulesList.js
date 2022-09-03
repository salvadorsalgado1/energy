import React from "react"
import { Stack } from '@mui/system';
import UtilityCard from '../../components/CardModule/UtilityCard';
import Gas from "../../pages/utilities/icons/fire.png";
import Water from "../../pages/utilities/icons/water-drop.png";
import Energy from "../../pages/utilities/icons/renewable-energy.png";


const Module = (props)=>{
    return(
        <div className="card-module">
            <UtilityCard title={props.title} description={props.description} image={props.image}/>
        </div>
    )
}



class ModulesList extends React.Component{
    render(){
        return(
            <div className="modules-list">
            <h1>Dashboard Modules</h1>
            <Stack spacing={4}>
                <Module title="Water" description="Check to see if your resources are being put to use!" image={Water}/>
                <Module title="Energy" description="Check to see if your resources are being put to use!" image={Energy}/>
                <Module title="Gas" description="Check to see if your resources are being put to use!" image={Gas}/>
                    {/* <UtilityCard title="Water" description="Get some detailed information about your water consumption and usage."/>
                    <UtilityCard title="Energy" description="Check out your power usage in Watt/Hours."/>
                    <UtilityCard title="Gas" description="Find out to see if you're receiving gas."/> */}
            </Stack>
        </div>
        )
    }
} 

export default ModulesList