import React from 'react';
import Header from './components/Header';
import Nav from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="portfolio-app">
      <Header />
      <Nav />
      <Project />
      <Footer />
    </div>
  );
};

export default App;
