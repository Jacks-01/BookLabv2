/**
 * @file Book.js
 * @description generates the model for a single book object. they each have a del and an upd button.
 */

import React, { Component } from 'react';

class Book extends Component {
    /**
     * 
     * @param {boolean} evt - value when the button is pressed.
     * @returns - sends props.handleDelete for a book to BookList.js
     */
	delete = (evt) => {
		evt.preventDefault();
		console.log(`Book.js delete()`);
		this.props.handleDelete(this.props.book);
	};

    /**
     * 
     * @param {boolean} evt value when the button is pressed.
     * @returns - sends props.handleUpdate for a book to BookList.js
     */
	update = (evt) => {
		evt.preventDefault();
		console.log(`Book.js update()`);
		this.props.handleUpdate();
	};

	render() {
		return (
			<>
				<div>
					<h2>{this.props.book.title}</h2>
					<p>{this.props.book.author}</p>
					<p>{this.props.book.summary}</p>
					<button onClick={this.delete}>Delete</button>
					<button onClick={this.update}>Update</button>
				</div>
			</>
		);
	}
}

export default Book;
