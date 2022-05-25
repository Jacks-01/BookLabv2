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

  /**
   * @description makes the API call to the back-end to retrieve all books when page loads if there is not a value for a book title.
   * 
   * @conditional querys a book from the DB by title.
   */
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

  /**
   * 
   * @param {string} title - value from the form that is submitted
   * @returns - sets the state of title, then calls the API again to search for the given book.
   */
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
