/**
 * @file BookList.js
 * @description creates an array of book objects
 * 
 */
import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import Book from './Book';


class BookList extends Component {
    
    render() { 
        return ( 
            <>
                {this.props.books.length &&
                this.props.books.map((idx) => {
                    <ListGroup key={idx}>
                        <ListGroup.Item>
                            <Book handleDelete={this.props.onDelete} handleUpdate={this.props.onUpdate}/>
                        </ListGroup.Item>
                    </ListGroup>
                })}
            </>
         );
    }
}
 
export default BookList;