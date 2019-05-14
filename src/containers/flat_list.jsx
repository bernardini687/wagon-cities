import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import setFlats from '../actions'; // index.js is implicit

import Flat from '../components/flat';

class FlatList extends React.Component {
  componentWillMount() {
    this.props.setFlats();
  }

  render() {
    const { flats } = this.props;
    return (
      <div className="flat-list col-sm-7">
        {flats.map(flat => <Flat key={flat.name} flat={flat} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return { flats: reduxState.flats };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(FlatList);
