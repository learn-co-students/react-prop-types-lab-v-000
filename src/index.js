import React from 'react';
import ReactDOM from 'react-dom';

import Product from './components/Product';

ReactDOM.render(
  <Product 
    name="Dunder Mifflin" 
    producer="PaperCo" 
    color="white" 
    weigh-t={210} 
  />,
  document.getElementById('root')
);
