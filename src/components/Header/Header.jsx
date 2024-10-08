import { useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ searchQuery, setSearchQuery }) => {
  const [menuOpen, setMenuOpen] = useState(false);




  return (
    <header className="bg-white scriptHeader shadow-sm">
      <div className="mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="logo-area flex items-end gap-10">
            {/* Logo */}
            <div className="text-2xl font-bold text-gray-800" style={{ position: "relative" }}>
              <a href="/" className=""><span className='script'>script</span><span className='x-call'>x</span> </a>
            </div>

            {/* Navigation (hidden on mobile, shown on large screens) */}
            <nav className="hidden md:flex space-x-8">
              <a href="/marketplace" className="text-gray-600 hover:text-blue-500">marketplace</a>
              <a href="/add" className="text-gray-600 hover:text-blue-500">add script</a>
              <a href="/settings" className="text-gray-600 hover:text-blue-500">settings</a>
            </nav>
          </div>


          {/* Search Bar (hidden on mobile) */}
          <div className="relative hidden md:block">
            <input
              type="text"
              className="pl-10 text-white pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Search scripts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l-4 4m0 0l4-4m-4 4h16M5 3h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
              </svg>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex transition-all- items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-500 focus:outline-none focus:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4">
            <nav className="space-y-4">
              <a href="/marketplace" className="block text-gray-600 hover:text-blue-500">marketplace</a>
              <a href="/add" className="block text-gray-600 hover:text-blue-500">add script</a>
              <a href="/settings" className="block text-gray-600 hover:text-blue-500">settings</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

// prop validation
Header.propTypes = {
  scripts: PropTypes.array.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};
