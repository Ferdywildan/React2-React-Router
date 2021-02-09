
import React from 'react'
import { withStyles } from "@material-ui/core";

// withStyles & makeStyles

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '420px',
        height: '100%',
        backgroundColor: '#ffd000'
    }
    
    
}
const SideMenu = (props) => {
    const { classes } = props;
    return (
        <div className={classes.sideMenu}>
            <br></br>
            <br></br>
            <br></br>
            <h1>Welcome Dude !</h1>
        </div>
        
    )
}




export default withStyles(style)(SideMenu);