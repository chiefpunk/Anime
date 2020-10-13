import React from 'react';
import './index.scss';
import {useRoutes} from 'react-router-dom';

import routes from '../../route';
function App() {
  const routing  = useRoutes(routes);
  return (
    <main className="App">
        {routing}
    </main>
  );  
}

export default App;
