/* eslint prefer-template: off */
/* eslint jsx-a11y/click-events-have-key-events: off */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectFlat } from '../actions';

class Flat extends React.Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  }

  render() {
    const { flat, selectedFlat, tabIndex } = this.props;
    const style = {
      backgroundImage: `
        linear-gradient(rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.2)),
        url(${flat.imageUrl})
      `
    };

    let classes = 'card';
    if (flat === selectedFlat) classes += ' selected';

    return (
      <div className={classes} style={style} onClick={this.handleClick} role="link" tabIndex={tabIndex + 1}>
        <div className="card-infos">
          <h2>{flat.name}</h2>
        </div>
        <div className="card-infos">
          <h4>
            {flat.price + ' ' + flat.currency}
          </h4>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectFlat }, dispatch);
}

function mapReduxStateToProps(reduxState) {
  return { flat: reduxState.flat };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(Flat);
