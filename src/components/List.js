import React, { createRef, useEffect, useState } from 'react';
import PlaceDetails from './PlaceDetails';
import { CircularProgress } from '@mui/material';

const List = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef()),
    );
  }, [places]);

  return (
    <div className="p-6">
      <h4 className="font-bold">
        Restaurants, Hotels & Attractions around you.
      </h4>
      {isLoading ? (
        <div className="h-[600px] flex justify-center items-center">
          <CircularProgress className="" />
        </div>
      ) : (
        <>
          <div className="flex items-center space-x-4 mt-3">
            <form className="min-w-[120px] mb-7 flex flex-col space-y-1">
              <label>Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="font-semibold border border-b-[1px] border-b-slate-600 rounded-sm"
              >
                <option value="restaurants">Restaurants</option>
                <option value="hotels">Hotels</option>
                <option value="attractions">Attractions</option>
              </select>
            </form>
            <form className="min-w-[120px] mb-7 flex flex-col space-y-1">
              <label>Rating</label>
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="font-semibold border border-b-[1px] border-b-slate-600 rounded-sm"
              >
                <option value={0}>All</option>
                <option value={3}>Above 3.0</option>
                <option value={4}>Above 4.0</option>
                <option value={5}>Above 4.5</option>
              </select>
            </form>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-12 gap-3 h-[75vh] overflow-y-scroll">
            {places?.map((place, index) => (
              <div className="xs:col-span-12" key={index} ref={elRefs[index]}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === index}
                  refProp={elRefs[index]}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default List;
