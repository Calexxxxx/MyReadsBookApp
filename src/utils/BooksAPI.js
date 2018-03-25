/**
 * @description Orginal code from the udacity course repo
 * https://github.com/udacity/reactnd-project-myreads-starter/blob/master/src/BooksAPI.js
 */

/**
 * @description link to the api
 * @type {string} api - link to the api from the books
 */
const api = "https://reactnd-books-api.udacity.com"

/**
 * @description Generate a unique token for storing your bookshelf data on the backend server.
 * @type {string} token - random token generated to authorize the user
 */
let token = localStorage.token
// check if there is no token in local storage then create one
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

/**
 * @description Sets the headers for sending with the requests
 * @type {{Accept: string, Authorization: string}}
 */
const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

/**
 * @description gets a book with a particular id
 * @param bookId
 * @returns {Promise<any>}
 */
export const get = (bookId) =>
    fetch(`${api}/books/${bookId}`, { headers })
        .then(res => res.json())
        .then(data => data.book)

/**
 * @description gets all books available on the api
 * @returns {Promise<any>}
 */
export const getAll = () =>
    fetch(`${api}/books`, { headers })
        .then(res => res.json())
        .then(data => data.books)

/**
 * @description updates the shelf the book is on
 * @param book
 * @param shelf
 * @returns {Promise<any>}
 */
export const update = (book, shelf) =>
    fetch(`${api}/books/${book.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ shelf })
    }).then(res => res.json())

/**
 * @description search the books api for any title matching the search query
 * @param query
 * @returns {Promise<any>}
 */
export const search = (query) =>
    fetch(`${api}/search`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
    }).then(res => res.json())
        .then(data => data.books)