/**
 * @file FilterForm.js
 * @description contains a form and a button
 */
import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class FilterForm extends Component {

    /**
     * 
     * @param {string} evt - string value of the form when submitted
     * @returns - sends string(title) to App.js
     */
    handleSubmit = (evt) => {
        evt.preventDefault();
        let title = evt.target.formTitle.value
        console.log(`FilterForm.js handleSubmit()`);
        this.props.onSubmit(title);

    }
	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group className="mb-3" controlId="formTitle">
					<Form.Label>Enter a title to search for a book</Form.Label>
					<Form.Control type="name" placeholder="title" />
				</Form.Group>
                <Button variant='primary' type='submit'>
                    Submit
                </Button>
			</Form>
		);
	}
}

export default FilterForm;
