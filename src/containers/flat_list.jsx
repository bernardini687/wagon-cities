import React from 'react';

import Flat from '../components/flat';

export default class FlatList extends React.Component {
  componentWillMount() {
    // dispatch action to load flats
  }

  render() {
    const { testFlats } = this.props;
    return (
      <div className="flat-list col-sm-7">
        {testFlats.flats.map(flat => <Flat key={flat.name} flat={flat} />)}
      </div>
    );
  }
}
