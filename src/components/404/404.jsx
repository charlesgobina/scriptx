import PropTypes from 'prop-types';
import { Search } from 'lucide-react';

const NoMatchesFound = ({ onClearFilters }) => {
  return (
    <div className="flex flex-col items-center justify-center h-64 bg-gray-100 p-6 rounded-lg">
      {/* Emoji or Icon */}
      <div className="text-6xl mb-4">😔</div>
      
      {/* Message */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">No matches found</h2>
      <p className="text-gray-600 mb-6 text-center">
        It looks like nothing matched your filters. Try changing the filters or search again!
      </p>

      {/* Call-to-Action Button */}
      <button
        onClick={onClearFilters}
        className="electricblue text-white px-4 py-2 rounded-lg shadow focus:outline-none focus:ring-2"
      >
        <Search className="inline-block h-5 w-5 mr-2" />
        Clear Filters
      </button>
    </div>
  );
};

export default NoMatchesFound;

NoMatchesFound.propTypes = {
  onClearFilters: PropTypes.func
};
