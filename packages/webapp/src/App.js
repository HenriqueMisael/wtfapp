import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { initNetworkConfig } from 'shared-store';

import Routes from './routes';
import Header from './components/Header';

function App() {
  initNetworkConfig();

  return (
    <Router>
      <div>
        <Header />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
