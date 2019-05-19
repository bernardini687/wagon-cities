import React from 'react';
// import { connect } from 'react-redux';

// function mapStateToProps(state) {
//   return {

//   };
// }

export default class City extends React.Component {
  render() {
    const { city } = this.props;
    return (
      <div>
        {city.name}
      </div>
    );
  }
}

// export default connect(
//   mapStateToProps,
// // Implement map dispatch to props
// )(City)
