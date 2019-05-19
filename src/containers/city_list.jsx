import React from 'react';

import City from './city';

export default class CityList extends React.Component {
  render() {
    const { cities } = this.props;
    return (
      <div className="cities">
        <ul>
          {cities.map(city => (
            <li className="list-group-item" key={city.address}>
              <City city={city} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
