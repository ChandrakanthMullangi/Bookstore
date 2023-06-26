# Interactive Bookstore Application

This is an interactive Bookstore application developed using ReactJS. The application allows users to browse and search for books, view book details, add books to a shopping cart, and place an order.


## API Reference

#### Get all Books

```http
  GET https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}&maxResults=40
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get Book by Id

```http
  GET https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |





## Features

- **Browse Books:** Users can explore a wide range of books available in the bookstore. The application provides a user-friendly interface to browse through different categories and genres.
- **Search:** Users can easily search for specific books using keywords or filters such as author, title, or category. The search functionality enables users to find their desired books quickly.
- **Book Details:** Users can view detailed information about each book, including the author, description, price, and availability. This helps users make informed decisions before adding books to their shopping cart.
- **Shopping Cart:** Users can add books to their shopping cart, which keeps track of the selected items. They can review the contents of the cart, update quantities, and remove books if needed.
- **Order Placement:** Once users have finalized their book selection, they can proceed to the checkout process. The application guides users through the necessary steps to complete the order, including providing shipping details and payment information.

## Technologies Used

**ReactJS:** The application is built using ReactJS, a popular JavaScript library for building user interfaces. React's component-based architecture enables efficient development and reusability of UI elements.

**HTML/CSS:** The application's user interface is designed using HTML and CSS, providing an intuitive and visually appealing experience to users.

**RESTful APIs:** The application interacts with backend services through RESTful APIs to fetch book data, process orders, and update inventory.
## Deployment

To deploy this project run

```bash
  npm run build
```

