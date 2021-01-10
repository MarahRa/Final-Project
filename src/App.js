import React, { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { HomePage, AboutPage, GalleryPage, ContactPage } from "./Pages";
import Footer from "./Components/Footer/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import ShopPage from "./Pages/ShopPage";
import NavBar from "./Components/NavBar";
import Drawer from '@material-ui/core/Drawer'
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";

library.add(fab, faFacebook, faTwitter, faInstagram);

const App = () => {
  const [cart, setCart] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer = () => setOpenDrawer(!openDrawer)
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeItemFroCart = event => setCart(cart.filter((_, index) => index !== +event.target.dataset.index))
  return (
    <>
      <NavBar cart={cart} openCart={toggleDrawer} />
      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
        <ShoppingCart cart={cart} removeItemFroCart={removeItemFroCart} />
      </Drawer>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/About" exact component={AboutPage} />
        <Route path="/Gallery" exact component={GalleryPage} />
        <Route path="/Shop" exact render={() => <ShopPage addToCart={addToCart}/>} />
        <Route path="/Contact" exact component={ContactPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
