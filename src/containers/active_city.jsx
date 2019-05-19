import React from 'react';
// import { connect } from 'react-redux';

// function mapStateToProps(state) {
//   return {

//   };
// }

export default class ActiveCity extends React.Component {
  render() {
    return (
      <div className="active-city">
        <h1>city name</h1>
        <p>city address</p>
        <img src="https://placekitten.com/g/200/300" alt="city" />
      </div>
    );
  }
}

// export default connect(
//   mapStateToProps,
// // Implement map dispatch to props
// )(ActiveCity)
