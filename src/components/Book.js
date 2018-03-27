// react
import React from 'react'

// prop-types
import PropTypes from 'prop-types'

// react router
import { Link } from 'react-router-dom'

/**
 * @description creates a book component
 * @param props
 * @returns {*}
 * @constructor
 */
const Book = (props) => {
    // check if book is an object and if onUpdateBook is a function
    Book.propTypes = {
        book: PropTypes.object.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    // props
    const { book, onUpdateBook, preview } = props
    // book object
    const { id, shelf, title, authors, imageLinks } = book
    // shelfs
    const shelfs = ['currentlyReading', 'wantToRead', 'read', 'none']

    /**
     * @description render the book component
     */
    return (
        <div className="book" id={id} key={id}>
            <div className="book-top">
                <Link to="/preview">
                    <div
                        className="book-cover"
                        onClick={() => {
                            preview(book.id)
                        }
                        }
                        style={{
                            width: 128, height: 193,
                            backgroundImage: imageLinks ? `url(${imageLinks.thumbnail})`: null }}>
                    </div>
                </Link>
                <div className="book-shelf-changer">
                    <select value={shelf || "none"} onChange={(event) => {
                        onUpdateBook(book, event.target.value)
                    }}>
                        {shelfs.map((shelf, index) => <option value={shelf} key={index}>{shelf}</option>)}
                    </select>
                </div>
            </div>
            <div className="book-title">
                <h2>{title}</h2>
            </div>
            <div className="book-authors">{authors}</div>
            <Link to="/preview">
                <button
                    className="preview-button"
                    onClick={() => {
                        preview(book.id)
                    }}
                >Review</button>
            </Link>
        </div>
    )
}

/**
 * @description export Book
 */
export default Book