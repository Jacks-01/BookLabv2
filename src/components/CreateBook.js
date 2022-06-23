/**
 * @file CreateBook.js
 * @description form that allows the user to create a new book object
 */

import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class CreateBook extends Component {


    /**
     * 
     * @param {string} evt the value of each form
     * @returns - sends a book object to app.js to use in onCreate();
     */
	handleSubmit = (evt) => {
		evt.preventDefault();
		console.log(`CreateBook.js handleSubmit()`);

		let title = evt.target.formTitle.value;
		let author = evt.target.formAuthor.value;
		let summary = evt.target.formSummary.value;
        console.log(`title: ${title} author: ${author} summary: ${summary}`);
        
        let book = {
            title: title,
            author: author,
            summary: summary,
        };

        this.props.onCreate(book);
	};


	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group className="mb-3" controlId="formTitle">
					<Form.Label>Book Title</Form.Label>
					<Form.Control type="name" placeholder="title" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formAuthor">
					<Form.Label>Author</Form.Label>
					<Form.Control type="name" placeholder="author" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formSummary">
					<Form.Label>Summary</Form.Label>
					<Form.Control type="name" placeholder="a short summary" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		);
	}
}

export default CreateBook;
