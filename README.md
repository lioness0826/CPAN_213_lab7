# ShoppingCartRedux

CPAN 213 - Cross-Platform Mobile Application Development  


## Features

- **Product List**
  - Fetch products from FakeStore API (with mock data fallback)
  - Display title, category, price, and image
- **Shopping Cart**
  - Add products to cart from the product list
  - View cart items with quantity and subtotal
  - Increase / decrease quantity
  - Remove single item
  - Clear entire cart
- **Cart Summary**
  - Total quantity of items
  - Total price of all items
- **UX & State Handling**
  - Loading indicator while fetching products
  - Error message & Retry button on failure
  - Pull-to-refresh on product list
  - Cart badge showing number of items in cart


## 🛠 Tech Stack

- **React Native CLI**
- **Redux Toolkit** (`@reduxjs/toolkit`)
- **React-Redux** (`react-redux`)
- **React Navigation** (`@react-navigation/native`, `@react-navigation/native-stack`)
- **Axios** for API requests



## Project Structure


ShoppingCartRedux/
├── App.js
├── android/
├── ios/
└── src/
    ├── data/
    │   └── products.js          
    ├── store/
    │   ├── index.js            
    │   ├── productsSlice.js     
    │   └── cartSlice.js        
    ├── screens/
    │   ├── ProductListScreen.js 
    │   └── CartScreen.js       
    ├── components/
    │   ├── ProductCard.js       
    │   └── CartItem.js          
    └── navigation/
        └── AppNavigator.js     

# Clone then:
npm install

# Redux Toolkit & React Redux
npm install @reduxjs/toolkit react-redux

# Axios for API calls
npm install axios

# React Navigation
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context

# Run 
npx react-native run-android

