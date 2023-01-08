import React from 'react';
import Header from '../header/Header';
import Promo from '../promo/Promo';
import Services from '../services/Services';
import ContactUs from '../contactus/ContactUs';
import Prices from '../prices/Prices';

const HomePage =() => {
  return (
    <>
    <Header />
    <Promo />
    <Services />
    <ContactUs />
    <Prices />
    </>
  );
}

export default HomePage;
