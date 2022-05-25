/**
 * @file App.js
 * @description Makes API call --> Holds master data for all books (from back-end)
 *
 */

import React, { Component } from 'react';
import axios from 'axios';
import BookList from './BookList';
import FilterForm from './FilterForm';
import CreateBook from './CreateBook';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
			title: '',
		};
	}

	componentDidMount() {
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
			URL += `?title=${this.state.title}`;
		}
		console.log(URL);
		axios({
			method: 'get',
			url: URL,
			params: {},
		})
			.then((res) => {
				console.log(`master data for all books: ${res.data}`);
				this.setState({ books: res.data });
				console.log(`this.state.books: ${this.state.books}`);
			})
			.catch((err) => {
				console.error(`ERROR in GET ${err}`);
			});
	};

	/**
	 * @param {string} title - value from the form that is submitted
	 * @returns - sets the state of title, then calls the API again to search for the given book.
	 */
	onSubmit = (title) => {
		console.log(`app.js onSubmit()`);
		this.setState({ title: title }, this.grabBooks);
	};

	onCreate = async (newBook) => {
		console.log(`app.js onCreate() info: ${JSON.stringify(newBook)}`);
		let URL = 'http://localhost:3001/books';

		await axios
			.post(URL, { newBook })
			.then((res) => {
				console.log(`response from POST: ${JSON.stringify(res.data)}`);
				let newBook = res.data;
				let currentBooks = this.state.books;
				currentBooks.push(newBook);
				this.setState({ books: currentBooks });
			})
			.catch((err) => {
				console.error(`ERROR from POST: ${err}`);
			});
	};

    onDelete = async (deletedBook) => {
      console.log(`App.js onDelete()`);
      let URL = `http://localhost:3001/books${deletedBook._id}`
      axios.delete(URL);
      
    }
	render() {
		return (
			<>
				<Router>
					<nav>
						<Link to="/">Home</Link>
						<Link to="/createBook">Create</Link>
					</nav>
					<Routes>
						<Route
							exact
							path="/"
							element={<FilterForm onSubmit={this.onSubmit} />}
						/>
						<Route
							exact
							path="/createBook"
							element={<CreateBook onCreate={this.onCreate} />}
						/>
					</Routes>
				</Router>
				{this.state.books.length && (
					<BookList
						books={this.state.books}
						onDelete={this.handleDelete}
						onUpdate={this.handleUpdate}
					/>
				)}
			</>
		);
	}
}

export default App;
