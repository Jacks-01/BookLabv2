/**
 * @file App.js
 * @description Makes API call --> Holds master data for all books (from back-end)
 * 
 */

import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount(){
    this.grabBooks();
  }

  grabBooks = () => {
    axios({
      method: 'get',
      url: process.env.URL_API,
      params: null,

    })
    .then((res) => {
      console.log(`master data for all books: ${res.data}`)
      this.setState({books: res.data})
    }).catch((err) => {
      console.error(`ERROR in GET ${err}`);
    });
  }
  render() { 
    return ( 
      <>
        <p>Router goes here</p>
        <p>Form goes here</p>
        <p>List goes here</p>
      </>
     );
  }
}
 
export default App;
