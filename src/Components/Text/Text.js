import React from 'react'; 
import classes from './Text.module.css'

const text = (props) => (

    <p id='text' className={classes.textDiv}>{props.quote}</p>
               
)


export default text; 