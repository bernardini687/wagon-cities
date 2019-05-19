/* eslint prefer-template: off */
/* eslint jsx-a11y/click-events-have-key-events: off */
/* eslint jsx-a11y/interactive-supports-focus: off */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectFlat } from '../actions';

class Flat extends React.Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  }

  render() {
    const { flat, selectedFlat } = this.props;
    const style = {
      backgroundImage: `
        linear-gradient(rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.2)),
        url(${flat.imageUrl})
      `
    };

    let classes = 'flat card-container';
    if (flat === selectedFlat) {
      classes += ' selected';
    }

    return (
      <div className={classes} onClick={this.handleClick} role="link">
        <div className="card" style={style}>
          <div className="card-description">
            <h2>{flat.name}</h2>
            <p>
              {flat.price + ' ' + flat.currency}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { selectedFlat: state.selectedFlat };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectFlat }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Flat);
