import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setCities } from '../actions';

import City from './city';

class CityList extends React.Component {
  componentWillMount() {
    this.props.setCities();
  }

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

function mapStateToProps(state) {
  return { cities: state.cities };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCities }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
