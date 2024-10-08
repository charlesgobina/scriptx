import { useState, useContext } from 'react';
import { Search } from 'lucide-react';
import PropTypes from 'prop-types';
import { UtilityContext } from '../../context/UtilityContext/dummy';
import { SlidersHorizontal } from 'lucide-react';

import './ScriptCatalog.css';

import ScriptCard from '../ScriptCard/ScriptCard';
import NoMatchesFound from '../404/404';

export default function Catalog({ scripts, resetFilters, title, subtitle }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredScripts = scripts.filter((script) =>
    script.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const {classVal, toggleClass} = useContext(UtilityContext);
  const filter = document.querySelector('.scriptFilter');

  console.log(`filter: ${filter}`);
  console.log(classVal);

  // handle filter sidebar open
  const handleFilterOpen = () => {
    filter.classList.remove('bye');
    toggleClass();
  };





  return (
    <div className="scriptCatalog col-span-12 md:col-span-10 bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="">
          <div className="scriptMarketplaceHeader flex justify-between items-center">
            {/* <h2 className="text-xl font-bold text-gray-900">Marketplace</h2> */}
            <h1 className="text-4xl text-gray-800 font-bold mb-4">{title}</h1>
            {classVal === 'bye' && (
              <SlidersHorizontal style={{cursor: 'pointer'}} onClick={() => handleFilterOpen()} className="h-6 w-6 text-gray-800" />
            )}
          </div>
          <p className="text-gray-800 mb-6">
            {subtitle}
          </p>
          <div className="lg:hidden md:hidden sm:block relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              className="pl-10 py-2 w-full text-white border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Search packages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filteredScripts.length === 0 ? (
          <NoMatchesFound onClearFilters={resetFilters} />
        ) : (
          <div className="grid grid-cols-12 gap-6">
            {filteredScripts.map((script) => (
              <div style={{ transition: "grid 0.25s ease-in" }} key={script.name} className={`col-span-12 ${classVal == 'bye' ? "md:col-span-4" : "md:col-span-6"} `}>
                <ScriptCard {...script} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

Catalog.propTypes = {
  scripts: PropTypes.array,
  resetFilters: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string
};