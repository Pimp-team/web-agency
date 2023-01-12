import React from 'react';
import Header from '../header/Header';
import Promo from '../promo/Promo';
import Services from '../services/Services';
import ContactUs from '../contactus/ContactUs';
import Prices from '../prices/Prices';
import Footer from '../footer/Footer';
import CaseStudies from '../case_studies/CaseStudies';

const HomePage =() => {
  return (
    <>
    <Header />
    <Promo />
    <Services />
    <CaseStudies />
    <ContactUs />
    <Prices />
    {/* <Footer /> */}
    </>
  );
}

export default HomePage;
