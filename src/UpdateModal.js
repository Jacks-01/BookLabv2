/**
 * @file UpdateModal.js
 * @description the modal that pops up when the user wants to update a resource
 */
import React, { Component } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';

class UpdateModal extends Component {

	handleSubmit = (evt) => {
		evt.preventDefault();
		console.log(`UpdateModal.js handleSubmit()`);

		let title = evt.target.formTitle.value;
		let author = evt.target.formAuthor.value;
		let summary = evt.target.formSummary.value;
		console.log(`title: ${title} author: ${author} summary: ${summary}`);

		let book = {
			title: title,
			author: author,
			summary: summary,
		};

		this.props.onUpdate(book);
	};
	render() {
		return (
		<>
			<Modal
				show={this.props.show}
				onhide={this.props.handleClose}
				backdrop="static"
				keyboard="false"
			>
				<Modal.Header closeButton>
					<Modal.Title>Update a book</Modal.Title>
				</Modal.Header>
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
						Update
					</Button>
				</Form>
			</Modal>
		</>
		);
	}
}

export default UpdateModal;
