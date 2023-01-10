import React from 'react';
import './App.css';
import { Navbar } from './components';
import { About, Education, Footer, Header, Skills, Testimonial, Work } from './container'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Education />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
