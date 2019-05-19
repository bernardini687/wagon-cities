import React from 'react';
import { connect } from 'react-redux';

class ActiveCity extends React.Component {
  render() {
    const { city } = this.props
    if (city) {
      return (
        <div className="active-city">
          <h1>{city.name}</h1>
          <p>{city.address}</p>
          <div className="image-container">
            <img src={`https://kitt.lewagon.com/placeholder/cities/${city.slug}`} alt={city.name} />
          </div>
        </div>
      );
    }
    return (
      <div className="active-city">
        <h1>city name</h1>
        <p>city address</p>
        <img src="https://placekitten.com/g/200/300" alt="city" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { city: state.city };
}

export default connect(mapStateToProps, null)(ActiveCity);
