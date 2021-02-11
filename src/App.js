import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './assets/scss/main.scss';

import Spinner from "./components/Layout/Spinner";

// Containers
const Layout = React.lazy(() => new Promise((resolve, reject) => {
  setTimeout(() => resolve(import('./components/Layout/index')), 2500)
}));

const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Spinner />}>
        <Route path="/" name="Main" component={Layout} />
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
