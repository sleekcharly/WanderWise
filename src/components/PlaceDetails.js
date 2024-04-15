import { MapPinIcon, PhoneIcon } from '@heroicons/react/16/solid';
import React from 'react';

const PlaceDetails = ({ place }) => {
  return (
    <div className="shadow-xl rounded-md mr-2 mb-4">
      <div classNme="h-[350px] rounded-md">
        <img
          src={
            place.photo
              ? place.photo.images.large.url
              : 'https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?s=612x612&w=0&k=20&c=OccJv1oKWSTDqJ6Irw7iW1NEbL0muU2ylqP3EOhOyEg='
          }
          alt={place.name}
          className="object-cover rounded-t-md"
        />
      </div>

      <h5 className="font-bold p-4">{place.name}</h5>
      <div className="pl-4 pr-4">
        <div className="flex justify-between">
          <p className="text-sm">Price</p>
          <p className="text-sm">{place.price_level}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-sm">Ranking</p>
          <p className="text-sm">{place.ranking}</p>
        </div>

        {place?.award?.map((award, index) => (
          <div className="flex justify-between items-center my-1" key={index}>
            <img src={award.images.small} alt={award.display_name} />
            <p className="text-sm">{award.display_name}</p>
          </div>
        ))}

        <div className="flex space-x-1 my-1">
          {place?.cuisine?.map(({ name }) => (
            <div
              key={name}
              className="my-1 mr-1 bg-gray-400 p-1 rounded-xl text-slate-200 text-xs"
            >
              {name}
            </div>
          ))}
        </div>

        {place?.address && (
          <div className="flex items-center justify-between my-4">
            <MapPinIcon className="w-5 h-5 mr-2" />{' '}
            <p className="text-sm">{place.address}</p>
          </div>
        )}

        {place?.phone && (
          <div className="flex items-center justify-between my-4">
            <PhoneIcon className="w-5 h-5 mr-2" />{' '}
            <p className="text-sm">{place.phone}</p>
          </div>
        )}

        <div className="flex items-center space-x-3 pb-4">
          <button
            onClick={() => window.open(place.web_url, '_blank')}
            className="text-xs p-1 bg-amber-800 text-slate-300 rounded-md cursor-pointer"
          >
            Trip Advisor
          </button>
          <button
            onClick={() => window.open(place.website, '_blank')}
            className="text-xs p-1 bg-amber-800 text-slate-300 rounded-md cursor-pointer"
          >
            Website
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
