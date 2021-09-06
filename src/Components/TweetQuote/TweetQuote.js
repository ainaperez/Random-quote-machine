import React from 'react'; 
import classes from './TweetQuote.module.css'


const tweetQuote = (props) => (
    <a href={props.link} id='tweet-quote' target='blank'  className={classes.twitterButton} title='Tweet this quote'><i className='fa fa-twitter'></i></a>
)

export default tweetQuote;