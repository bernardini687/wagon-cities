import React from 'react';

import City from './city';

export default class CityList extends React.Component {
  render() {
    const { cities } = this.props;
    return (
      <div>
        {cities.map(city => <City key={city.address} city={city} />)}
      </div>
    );
  }
}
