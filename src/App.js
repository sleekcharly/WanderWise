import React, { useEffect, useState } from 'react';
import { Header, List, Map } from './components';
import { getPlacesData } from './api';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {
  const [places, setPlaces] = useState([]);

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      },
    );
  }, []);

  useEffect(() => {
    getPlacesData(bounds?.sw, bounds?.ne).then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [coords, bounds]);

  return (
    <main>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-12 w-full">
        <div className="md:col-span-4">
          <List places={places} />
        </div>

        <div className="md:col-span-8">
          <Map
            setCoords={setCoords}
            setBounds={setBounds}
            coords={coords}
            places={places}
          />
        </div>
      </div>
    </main>
  );
};

export default App;
