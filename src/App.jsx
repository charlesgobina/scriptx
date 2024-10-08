import { useState } from 'react';
import Catalog from './components/ScriptCatalog/ScriptCatalog';
import Filtering from './components/ScriptFilter/ScriptFilter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UtilityProvider from './context/UtilityContext/dummy';

const App = () => {
  const scripts = [
    {
      name: 'pdf-merge',
      description: 'Merge multiple PDF files with a simple command. Supports page selection and reordering.',
      downloads: 12453,
      ratings: 4.8,
      platforms: ['windows', 'linux', 'macos'],
      categories: ['utility'],
    },
    {
      name: 'img-compress',
      description: 'Batch compress images while maintaining quality. Supports multiple formats and custom settings.',
      downloads: 8234,
      ratings: 4.6,
      platforms: ['windows', 'linux', 'macos'],
      categories: ['media'],
    },
    {
      name: 'vid-convert',
      description: 'Convert video files between formats. Includes presets for common platforms.',
      downloads: 15678,
      ratings: 4.9,
      platforms: ['macos'],
      categories: ['media'],
    },
    {
      name: 'audio-convert',
      description: 'Convert audio files between formats. Includes presets for common platforms.',
      downloads: 15678,
      ratings: 4.9,
      platforms: ['macos'],
      categories: ['media'],
    },

  ]

  // State for filters
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering logic
  const filteredScripts = scripts.filter((script) => {
    const categoryMatch =
      selectedCategories.length === 0 || selectedCategories.some(category => script.categories.includes(category));
    const platformMatch =
      selectedPlatforms.length === 0 || selectedPlatforms.some(platform => script.platforms.includes(platform));
    const ratingMatch =
      selectedRatings.length === 0 || selectedRatings.some(rating => script.ratings >= rating);
    const searchMatch = script.name.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && platformMatch && ratingMatch && searchMatch;
  });

  // reset filters
  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedPlatforms([]);
    setSelectedRatings([]);
    setSearchQuery('');
  };

  return (
    <div className="mx-auto p-4 bg-white text-gray-900">
      <UtilityProvider>
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          scripts={filteredScripts} />

        <main className="grid grid-cols-12 mt-20 relative">
          <Filtering
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedPlatforms={selectedPlatforms}
            setSelectedPlatforms={setSelectedPlatforms}
            selectedRatings={selectedRatings}
            setSelectedRatings={setSelectedRatings}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <section className='min-h-screen scriptSectionCatalog col-span-12 md:col-span-9 bg-gray-50'>
            <Catalog title={"Marketplace"} subtitle={"Discover and install powerful CLI tools with a single command"} resetFilters={resetFilters} scripts={filteredScripts} />
            <Catalog title={"Newly Added"} subtitle={"Glide through our newly added tools"} resetFilters={resetFilters} scripts={filteredScripts} />
          </section>
        </main>
        <footer className="text-center text-gray-500 mt-8">
          <Footer />
        </footer>
      </UtilityProvider>
    </div>
  );
}

export default App;