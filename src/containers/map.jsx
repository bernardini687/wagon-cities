import React from 'react';
import GoogleMapReact from 'google-map-react';

import { connect } from 'react-redux';

const Map = ({ selectedFlat }) => {
  let marker = null;
  let center = { lat: 48.856614, lng: 2.352222 };

  if (selectedFlat) {
    marker = (
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "red",
          borderRadius: "50%"
        }}
        lat={selectedFlat.lat}
        lng={selectedFlat.lng}
      />
    );
    center = {
      lat: selectedFlat.lat,
      lng: selectedFlat.lng
    };
  }

  return (
    <div className="col-sm-5" style={{ style: '100vh' }}>
      <GoogleMapReact center={center} defaultZoom={15}>
        {marker}
      </GoogleMapReact>
    </div>
  );
};

function mapStateToProps(state) {
  return { selectedFlat: state.selectedFlat };
}

export default connect(mapStateToProps)(Map);
