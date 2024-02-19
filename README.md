# React---5
Context-API
React Shopping Cart Application
===============================

This is a simple React shopping cart application that allows users to browse through a list of products, add items to their cart, adjust quantities, remove items from the cart, and see the total price and quantity of items in the cart.

Features
--------

*   Display of products with images, titles, descriptions, prices, and quantities.
*   Addition of items to the cart.
*   Adjustment of item quantities in the cart.
*   Removal of items from the cart.
*   Calculation of total price and total quantity of items in the cart.

Technologies Used
-----------------

*   React: A JavaScript library for building user interfaces.
*   HTML/CSS: For markup and styling.
*   JavaScript: For scripting functionalities.

Components
----------

### App Component

The main component that wraps the entire application. It imports the `DataContext` component and the `Card` component.

### Card Component

The `Card` component is responsible for rendering the product cards, managing the state of the cart, and providing functionalities like increasing/decreasing quantities and removing items from the cart.

### DataContext Component

The `DataContext` component is a context provider that manages the state of the products and cart data. It provides the product data to the entire application using the React Context API.

How to Run
----------

1.  Clone the repository to your local machine.
2.  Navigate to the project directory.
3.  Install dependencies by running `npm install`.
4.  Start the development server by running `npm start`.
5.  The application should open in your default web browser.

How to Use
----------

1.  Browse through the list of products.
2.  Click on the "+" button to add an item to the cart.
3.  Adjust the quantity of items in the cart using the "+" and "-" buttons.
4.  Click on the "Remove Cart" button to remove an item from the cart.
5.  The total price and total quantity of items in the cart will be updated dynamically.

