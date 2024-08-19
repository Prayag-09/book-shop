# Book Management App

A simple yet functional book management application that allows users to add, update, view, and delete books. This application includes both a frontend built with React and a backend with Express and MySQL.

![Screenshots](image.png)

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Add New Books:** Users can add new books to the collection with details including title, description, price, and cover image.
- **Update Books:** Users can update the details of existing books.
- **Delete Books:** Users can remove books from the collection.
- **View Books:** Users can view a list of all books in the collection.

## Technologies

- **Frontend:**
  - React
  - React Router
  - Tailwind CSS
  - Framer Motion

- **Backend:**
  - Node.js
  - Express
  - MySQL

## Setup

### Frontend

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Prayag-09/book-shop.git
   cd book-shop
   ```

2. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Create a `.env` file in the `frontend` directory:**

   Copy the content from `.env.example` and paste it into a new file named `.env` in the `frontend` directory. Update the `REACT_APP_BACKEND_URL` with your backend URL.

   ```env
   REACT_APP_BACKEND_URL=http://localhost:3306
   ```

5. **Start the development server:**

   ```bash
   npm start
   ```

6. **Visit `http://localhost:3000` in your browser to view the application.**

### Backend

1. **Navigate to the backend directory:**

   ```bash
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file in the `backend` directory:**

   Copy the content from `.env.example` and paste it into a new file named `.env` in the `backend` directory. Update the `MYSQL_ADDON_URI` with your database connection string.

   ```env
   MYSQL_ADDON_URI=mysql://ujfyi24bnjq9yfxb:F6BF91vwSSAjZNFItLAN@blnzq5vfpc9fcawc1dgi-mysql.services.clever-cloud.com:3306/blnzq5vfpc9fcawc1dgi
   ```

4. **Run the database setup script:**

   ```bash
   node setupDatabase.js
   ```

5. **Start the server:**

   ```bash
   npm start
   ```

6. **Visit `http://localhost:5173` to interact with the API (if running locally).**

## API Endpoints

- **GET /books**: Retrieve all books.
- **GET /books/:id**: Retrieve a single book by ID.
- **POST /books**: Add a new book.
- **PUT /books/:id**: Update an existing book by ID.
- **DELETE /books/:id**: Delete a book by ID.

## Usage

1. **Add a Book:**
   - Navigate to the "Add New Book" page.
   - Fill in the form with book details and submit.

2. **Update a Book:**
   - Navigate to the "Update" page for a specific book.
   - Modify the details and submit.

3. **Delete a Book:**
   - On the list of books, click "Delete" next to the book you want to remove.

4. **View Books:**
   - View all books on the homepage.
]