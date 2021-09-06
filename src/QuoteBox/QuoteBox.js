import React, {Component} from 'react';
import axios from 'axios'

import Text from '../Components/Text/Text';
import Author from '../Components/Author/Author';
import TweetQuote from '../Components/TweetQuote/TweetQuote';
import NewQuote from '../Components/NewQuote/NewQuote';
import classes from './QuoteBox.module.css'


class QuoteBox extends Component{

    state={
        quotes: null,
        quote: null,
       
    }
    
    componentDidMount(){
        
        axios.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then(response => {
           this.setState({quotes: response.data.quotes})  ; 
           console.log(response)
            const randomIndex = Math.floor(Math.random()*this.state.quotes.length+1);
            this.setState({quote: this.state.quotes[randomIndex]})
            console.log(this.state.quote)

        })
    }

    newQuoteHandler = () => {
        const randomIndex = Math.floor(Math.random()*this.state.quotes.length+1);
            this.setState({quote: this.state.quotes[randomIndex]})
            
        this.colorChange()

    }

    colorChange = () => {
        const colors = [
            '#c9e265', 
            '#a24936', 
            '#ffde59', 
            '#ffbe59',
            '#5271ff',
            '#8c52ff',
            '#ff5757', 
            '#03989e', 
            '#cb6ce6', 
        ]; 
        const randomColor = colors[Math.floor(Math.random()*colors.length)];

        document.getElementById('wrapper').animate({backgroundColor : randomColor}, {duration: 1000, fill: 'forwards'});
        }

    

    render(){
        
        let loadedQuote = <p>Loading...</p>

        
        if(this.state.quote !== null){
           
            const twitter = 'twitter.com/intent/tweet?text='+ encodeURIComponent(this.state.quote.quote + "-' "+ this.state.quote.author + " '.")

           loadedQuote= (
            <div id='wrapper' className={classes.wrapper}>
                <div id='quote-box' className={classes.quoteBox}>
                <Text quote={this.state.quote.quote}/>
                <Author author={this.state.quote.author}/>
                    <div className={classes.buttons}>
                        <TweetQuote link={twitter} />
                        <NewQuote clicked={this.newQuoteHandler}/>
                    </div>
                </div>
            </div>
            )
        }
        
        return loadedQuote;
        
    }
 
};

export default QuoteBox;

