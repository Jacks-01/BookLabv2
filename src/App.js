/**
 * @file App.js
 * @description Makes API call --> Holds master data for all books (from back-end)
 * 
 */

import React, { Component } from 'react';
import axios from 'axios';
import BookList from './BookList';
import FilterForm from './FilterForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      title: '',
    }
  }

  componentDidMount(){
    this.grabBooks();
  }

  grabBooks = async () => {
    // console.log(process.env.API_URL);
    let URL = 'http://localhost:3001/books';
    if (this.state.title !== '') {
      URL += `?title=${this.state.title}`
    };
    console.log(URL);
    axios({
      method: 'get',
      url: URL,
      params: {
    
      }
    })
    .then((res) => {
      console.log(`master data for all books: ${res.data}`)
      this.setState({books: res.data})
      console.log(`this.state.books: ${this.state.books}`);
    }).catch((err) => {
      console.error(`ERROR in GET ${err}`);
    });
  }
  onSubmit = (title) => {
    console.log(`app.js onSubmit()`);
    this.setState({title: title}, this.grabBooks);
    

  }
  render() { 
    return ( 
      <>
        <p>Router goes here</p>
        <FilterForm onSubmit={this.onSubmit}/>
        <p>List goes here</p>
        {this.state.books.length &&
          (<BookList books={this.state.books} onDelete={this.handleDelete} onUpdate={this.handleUpdate}/>)}
      </>
     );
  }
}
 
export default App;
