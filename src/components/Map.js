import React from 'react';

import GoogleMap from 'google-map-react';

const Map = ({ setCoords, setBounds, coords }) => {
  return (
    <div className="h-[85vh] w-full">
      <GoogleMap
        bootstrapURLKeys={{ key: 'AIzaSyCPuHRrR1zqDJ5LNmrQzpEfA8VU-x_1l20' }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });

          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={''}
      ></GoogleMap>
    </div>
  );
};

export default Map;
