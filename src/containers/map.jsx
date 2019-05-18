import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = () => {
  const marker = null;
  const center = { lat: 48.856614, lng: 2.352222 };

  return (
    <div className="col-sm-5" style={{ style: '100vh' }}>
      <GoogleMapReact center={center} defaultZoom={15}>
        {marker}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
