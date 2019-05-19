import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActiveCity } from '../actions';

class City extends React.Component {
  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  }

  render() {
    const { city } = this.props;
    return (
      <div onClick={this.handleClick} role="link">
        {city.name}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setActiveCity }, dispatch);
}


export default connect(null, mapDispatchToProps)(City);
