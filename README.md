## Product List Demo - HTTP API Interaction

This project demonstrates a simple product list interface that interacts with an API using a custom Http class for managing GET, POST, and DELETE requests. The project allows users to:

- View a list of products
- Add new products
- Delete products

## Features

- Development Server: Hot-reloading development server using Parcel.
- Mock API: json-server to create a local REST API for development purposes.
- Concurrent Execution: Run the development server and the mock API simultaneously - with concurrently.

## Project Overview

- Http Class
  The Http class simplifies HTTP requests. It supports the following operations:

GET: Fetches data from the server.
POST: Sends new data to the server.
DELETE: Deletes data from the server.

## Usage

- Viewing Products
  When the page loads, it sends a GET request to the API to fetch the list of products and displays them in the UI.

- Adding a Product
  Fill in the Product and Price fields in the form.
  Submit the form to add a new product to the list.

- Deleting a Product
  Click the "X" button next to a product to delete it from the list.
  The product will be removed after a DELETE request to the API.
