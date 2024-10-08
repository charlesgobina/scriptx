import { useContext } from 'react';
import PropTypes from 'prop-types';
import './ScriptFilter.css';
import PricingSlider from './PriceSlider/PriceSlider';
import { ChevronLeft } from 'lucide-react';
import { UtilityContext } from '../../context/UtilityContext/dummy';


const categories = ['utility', 'media', 'developer', 'security', 'productivity', 'design', 'finance', 'social', 'education', 'health', 'other'];
const platforms = ['windows', 'linux', 'macos', 'wsl'];
const ratings = [4.5, 4.6, 4.7, 4.8, 4.9];
const progLang = ['Python', 'JavaScript', 'Java', 'C++', 'C#', 'Ruby', 'Go',];

export default function Filtering({
  selectedCategories,
  setSelectedCategories,
  selectedPlatforms,
  setSelectedPlatforms,
  selectedRatings,
  setSelectedRatings,
  // searchQuery,
  // setSearchQuery,
}) {

  const {toggleClass} = useContext(UtilityContext);

  // Handle category checkbox change
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  // Handle platform checkbox change
  const handlePlatformChange = (platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]
    );
  };

  // Handle rating checkbox change
  const handleRatingChange = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating]
    );
  };

  // handle filter sidebar close
  const handleFilterClose = () => {
    const filter = document.querySelector('.scriptFilter');
    filter.classList.add('bye');
    toggleClass();
  };

  return (
    <aside className="hidden flex-grow-1 md:block w-100 scriptFilter h-screen col-span-2 bg-white p-4 rounded-lg shadow">
      
      <div className="scriptFilterHeader flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">Filters</h2>
          <ChevronLeft onClick={() => {handleFilterClose()}} className="h-6 w-6 text-gray-800" />
      </div>

      <div className="filter-area">

        <div className="scriptCategoryFilter">
          <h3 className="text-sm font-semibold mb-2 text-gray-700">Category</h3>
          <div className="mb-4 h-60 overflow-scroll ">
            {categories.map((category) => (
              <div key={category} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="mr-2"
                />
                <label className='text-gray-800'>{category}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="scriptPlatformArea">
          <h3 className="text-sm font-semibold mb-2 text-gray-700">Platform</h3>
          <div className="mb-4">
            {platforms.map((platform) => (
              <div key={platform} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={selectedPlatforms.includes(platform)}
                  onChange={() => handlePlatformChange(platform)}
                  className="mr-2"
                />
                <label className='text-gray-800'>{platform}</label>
              </div>
            ))}
          </div>

        </div>


        <div className="scriptLanguageArea">
          <h3 className="text-sm font-semibold mb-2 text-gray-700">Languages</h3>
          {progLang.map((lang) => (
            <div key={lang} className="flex items-center mb-2">
              <input
                type="checkbox"
                // checked={selectedRatings.includes(rating)}
                // onChange={() => handleRatingChange(rating)}
                className="mr-2"
              />
              <label className='text-gray-800'>{lang}</label>
            </div>
          ))}
        </div>

        <div className="scriptRatingsArea">
          {/* Rating Filter */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2 text-gray-700">Minimum Rating</h3>
            {ratings.map((rating) => (
              <div key={rating} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={selectedRatings.includes(rating)}
                  onChange={() => handleRatingChange(rating)}
                  className="mr-2"
                />
                <label className='text-gray-800'>{rating}+</label>
              </div>
            ))}
          </div>
        </div>




        <PricingSlider />


      </div>






    </aside>
  );
}

// prop validation
Filtering.propTypes = {
  selectedCategories: PropTypes.arrayOf(PropTypes.string),
  setSelectedCategories: PropTypes.func,
  selectedPlatforms: PropTypes.arrayOf(PropTypes.string),
  setSelectedPlatforms: PropTypes.func,
  selectedRatings: PropTypes.arrayOf(PropTypes.number),
  setSelectedRatings: PropTypes.func,
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
};