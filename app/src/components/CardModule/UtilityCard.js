import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import '../CardModule/styles.css';

const ModuleIcon = (props)=>{
    return(
        <img class="module-icon" src={props.source} alt=""/>
    )
}

const UtilityCard = (props)=>{
    return(
        <div className="utility-card">
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                     <p className="module-title">
                        <ModuleIcon source={props.image}/>
                        {props.title}</p>
                     <p className="module-description">
                        {props.description}
                     </p> 
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card> 
        </div>
    )
}




export default UtilityCard