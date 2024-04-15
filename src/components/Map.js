import React from 'react';

import GoogleMap from 'google-map-react';
import { MapPinIcon } from '@heroicons/react/16/solid';
import Rating from '@mui/material/Rating';

const Map = ({ setCoords, setBounds, coords, places }) => {
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
      >
        {places?.map((place, i) => (
          <div
            className="absolute transform translate-x-1/2 translate-y-1/2 z-10 hover:z-20"
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            <MapPinIcon className="md:hidden w-6 h-6" />
            <div className="shadow-xl p-[10px] flex flex-col justify-center w-[100px] bg-slate-200">
              <p className="font-semibold text-xs">{place.name}</p>
              <img
                className="cursor-pointer object-cover"
                src={
                  place.photo
                    ? place.photo.images.large.url
                    : 'https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?s=612x612&w=0&k=20&c=OccJv1oKWSTDqJ6Irw7iW1NEbL0muU2ylqP3EOhOyEg='
                }
                alt={place.name}
              />
              <Rating size="small" value={Number(place.rating)} readOnly />
            </div>
          </div>
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
