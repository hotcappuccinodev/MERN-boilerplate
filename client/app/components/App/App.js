import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App = ({ children }) => (
  <React.Fragment>
    <Header />

    <main>
      {children}
    </main>

    <Footer />
  </React.Fragment>
);

export default App;
