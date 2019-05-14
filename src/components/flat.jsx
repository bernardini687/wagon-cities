/* eslint prefer-template: off */

import React from 'react';

const Flat = ({ flat }) => {
  return (
    <div className="card">
      <div className="card-infos">
        <h2>{flat.name}</h2>
      </div>
      <div className="card-infos">
        <h4>
          {flat.price + ' ' + flat.currency}
        </h4>
      </div>
    </div>
  );
};

export default Flat;
