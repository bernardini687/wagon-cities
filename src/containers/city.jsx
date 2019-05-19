import React from 'react';
// import { connect } from 'react-redux';

// function mapStateToProps(state) {
//   return {

//   };
// }

export default class City extends React.Component {
  handleClick = (e) => {
    console.log(e.target);
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

// export default connect(
//   mapStateToProps,
// // Implement map dispatch to props
// )(City)
