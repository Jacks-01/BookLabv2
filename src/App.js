/**
 * @file App.js
 * @description Makes API call --> Holds master data for all books (from back-end)
 */

import React, { Component } from 'react';
import axios from 'axios';
import BookList from './BookList';
import FilterForm from './FilterForm';
import CreateBook from './CreateBook';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UpdateModal from './UpdateModal';
const SERVER = process.env.REACT_APP_HEROKU_URL;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
			title: '',
			show: false,
			bookToBeUpdated: {},
		};
	}

	componentDidMount() {
		this.grabBooks();
	}

	/**
	 * @description makes the API call to the back-end to retrieve all books when page loads if there is not a value for a book title.
	 * @conditional querys a book from the DB by title.
	 */
	grabBooks = async () => {
		let URL = `${SERVER}/books`;
		if (this.state.title !== '') {
			URL += `?title=${this.state.title}`;
		}
		axios({
			method: 'get',
			url: URL,
			params: {},
		})
			.then((res) => {
				this.setState({ books: res.data });
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
		this.setState({ title: title }, this.grabBooks);
	};

	onCreate = async (newBook) => {
		let URL = `${SERVER}/books`;

		await axios
			.post(URL, { newBook })
			.then((res) => {
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
		let URL = `${SERVER}/books/${deletedBook._id}`;
		await axios
			.delete(URL, deletedBook._id)
			.then((res) => {
				const filteredBooks = this.state.books.filter((book) => {
					return book._id !== deletedBook;
				});
				this.setState({ books: filteredBooks }, this.grabBooks);
			})
			.catch((err) => {
				console.error(`ERROR from DELETE: ${err}`);
			});
	};

	onUpdate = async (updatedBook) => {
		let bookToBeUpdated = this.state.bookToBeUpdated;

		let URL = `${SERVER}/books/${bookToBeUpdated._id}`;

		await axios
			.patch(URL, updatedBook)
			.then((res) => {
				this.grabBooks();
			})
			.catch((err) => {
				console.error(`Error from UPDATE ${err}`);
			});
	};

	updateForm = async (updatedBook) => {
		this.setState({ show: true });
		this.setState({ bookToBeUpdated: updatedBook });
	};

	handleClose = () => {
		this.setState({ show: false });
	};
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
						onDelete={this.onDelete}
						onUpdate={this.updateForm}
					/>
				)}
				<UpdateModal
					onUpdate={this.onUpdate}
					handleClose={this.handleClose}
					show={this.state.show}
				/>
			</>
		);
	}
}

export default App;
