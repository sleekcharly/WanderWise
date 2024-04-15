import React from 'react';

import { Autocomplete } from '@react-google-maps/api';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

const Header = () => {
  return (
    <header className="static bg-amber-800 p-3 text-white">
      <nav className="flex justify-between">
        <h5 className="hidden sm:block">WANDER WISE</h5>
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <h6 className="hidden sm:block">Explore new places</h6>
          {/* <Autocomplete> */}
          <div className="flex items-center space-x-2 bg-opacity-40 bg-amber-900  mr-2 sm:mr-0 w-full sm:w-auto p-1">
            <MagnifyingGlassIcon className="text-yellow-500 h-6 w-6" />

            <input
              placeholder="Search ..."
              className=" py-1 px-0 bg-amber-900 bg-opacity-40 focus:outline-none focus:ring-amber-500 text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0 border-none w-full"
            />
          </div>
          {/* </Autocomplete> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
