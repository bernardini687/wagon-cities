/* eslint prefer-template: off */

import React from 'react';

class Flat extends React.Component {
  handleClick = () => {
    //
  }

  render() {
    const { flat } = this.props;
    const style = {
      backgroundImage: `
        linear-gradient(rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.2)),
        url(${flat.imageUrl})
      `
    };

    return (
      <div className="card" style={style} onClick={this.handleClick}>
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

export default Flat;
