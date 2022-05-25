/**
 * @file Book.js
 * @description generates the model for a single book object. they each have a del and an upd button.
 */

import React, { Component } from 'react';


class Book extends Component {

        delete = (evt) => {
            evt.preventDefault();
            console.log(`Book.js delete()`);
            this.props.handleDelete();
        }

       update = (evt) => {
            evt.preventDefault();
            console.log(`Book.js update()`);
            this.props.handleUpdate();
        }

    render() { 
        return ( 
            <>
                {this.props.books.length &&
                this.props.books.map((book, index)=>{
                    <div key={index}>
                        {book}
                        <button onClick={this.delete}>Delete</button>
                        <button onClick={this.update}>Update</button>
                    </div>
                })}
            
            </>
         );
    }
}
 
export default Book;