import axios from 'axios';
import React, { Component } from 'react';

class Api extends Component{
    constructor(){
        super();
        this.state ={
            posts : []
        }
    }
    componentDidMount (){
           fetch("https://jsonplaceholder.typicode.com/posts").then(response =>{
                console.log(response);
                this.setState({posts:response.data});
            });
        }

        render(){
            return(
                <h1>api call</h1>
            );
        }
}

  
  export default Api;