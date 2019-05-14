import React from 'react';

import Flat from '../components/flat';

const FlatList = ({ testFlats }) => {
  return (
    <div className="flat-list col-sm-7">
      {testFlats.flats.map(flat => <Flat key={flat.name} flat={flat} />)}
    </div>
  );
};

export default FlatList;
