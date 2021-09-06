import React from 'react'; 
import classes from './NewQuote.module.css';

const newQuote = (props) => (
    <button id='new-quote' className={classes.newQuote} onClick={props.clicked}>New quote</button>
)

export default newQuote;