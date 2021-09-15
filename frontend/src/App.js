import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import data from './data';
import Product from './components/Product';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
      <BrowserRouter>
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">miniEC</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
        </header>
        <main>
            <Route path="/" component={HomeScreen} exact></Route>
            <Route path="/product/1" componet={ProductScreen}></Route>

        </main>
        <footer className="row center">
            All rights reserved

        </footer>
    </div>
    </BrowserRouter>
    );
}

export default App;
