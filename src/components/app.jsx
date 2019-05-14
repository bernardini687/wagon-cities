import React from 'react';

import FlatList from '../containers/flat_list';
import Map from '../containers/map';

const testFlats = {
  flats: [{
    name: 'Charm at the Steps of Montmartre',
    imageUrl: 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg',
    price: 164,
    currency: 'EUR'
  }]
};

const App = () => {
  return (
    <div className="row">
      <FlatList testFlats={testFlats} />
      <Map />
    </div>
  );
};

export default App;
