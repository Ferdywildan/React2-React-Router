import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';
import './App.css';
import SideMenu from "./Components/SideMenu";
import Header from "./Components/Header";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
   root: {
     '& > *': {
       margin: theme.spacing(1),
     },
   },
 }));

 export default function ContainedButtons() {
   const classes = useStyles();
 

   
      return(
         <div>
         <Header />
         <SideMenu />
         <div className={classes.root}>
            <br></br>
         
         <Button component={ Link } to="/" variant="contained" color="secondary">
            Beranda
         </Button>
         <Button component={ Link } to="/tentangsaya" variant="contained" color="secondary">
            Tentang Saya
         </Button>
         <Button component={ Link } to="/karya" variant="contained" color="secondary">
            Karya
         </Button>
         <Button component={ Link } to="/kontak" variant="contained" color="secondary">
            Kontak
         </Button>
         
         </div>
         <div className="isi-content">
         <p><Utama /></p>
         </div>
         
         </div>
      );
   }
   
  
