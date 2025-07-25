import React from 'react';
import HeroSection from '../sections/HeroSection';
import Stats from '../sections/Stats';
import HowItWorks from '../sections/HowItWorks';
import Navbar from '../components/Navbar';
import Features from '../sections/Features';
import UseCases from '../sections/UseCases';
import Comparison from '../sections/Comparison';
import BenchMarks from '../sections/BenchMarks';
import Upgrade from '../sections/Upgrade';
import PrivacySection from '../sections/PrivacySection';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import Footer from '../sections/Footer';

const Home = () => {
  return (
    <div>
    <Navbar/>
    <HeroSection/>
    <Stats/>
    <HowItWorks/>
    <Features/>
    <UseCases/>
    <Comparison/>
    <BenchMarks/>
    <Upgrade/>
    <PrivacySection/>
    <Testimonials/>
    <FAQ/>
    <Footer/>
    </div>
  );
};

export default Home;
