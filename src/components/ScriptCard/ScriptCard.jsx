import { useState } from 'react';
import PropTypes from 'prop-types';
import { Terminal, Copy, Star, Download } from 'lucide-react';
import { truncateText } from '../../utility/filterHelper';


const ScriptCard = ({ name, description, downloads, ratings, platforms, categories }) => {
  const [showCopied, setShowCopied] = useState(false);
  const [showCopiedButton, setShowCopiedButton] = useState(true);
  const installCommand = `scriptx install ${name}`;

  const copyCommand = () => {
    navigator.clipboard.writeText(installCommand);
    setShowCopied(true);
    setShowCopiedButton(false);
    setTimeout(() => setShowCopied(false), 2000);
    setTimeout(() => setShowCopiedButton(true), 2000);
  };

  return (
    <div className=" border rounded-lg shadow-sm h-full p-4 hover:shadow-lg transition-shadow transform transition-transform duration-300 ease-in-out bg-white text-gray-900">
      <div className="mb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-blue-500" />
            <h2 className="font-bold text-gray-800 text-lg">{name}</h2>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-sm">{ratings}</span>
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          {platforms.map((platform) => (
            <span
              key={platform}
              className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
      <p className="text-gray-700 mb-4">{ truncateText(description, 40) }</p>
      <div className="relative bg-gray-100 p-3 rounded-md font-mono text-sm mb-3 group">
        {installCommand}
        {showCopiedButton && (<button
          onClick={copyCommand}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-100 group-hover:opacity-0 transition-opacity"
        >
          <Copy className="h-4 w-4 text-gray-500 hover:text-blue-500" />
        </button>)}
        {showCopied && (
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500">
            ️Copied!
          </span>
        )}
      </div>
      <div className="flex items-center align-baseline justify-between gap-2 text-sm text-gray-500">
        <div className="downloads flex align-middle gap-3">
          <Download className="h-4 w-4" />
          <span>{downloads.toLocaleString()} downloads</span>
        </div>
        
        <div className="categories">
          {categories.map((category) => (
            <span key={category} className="bg-gray-200 text-xs px-2 py-1 rounded-md">
              {category}
            </span>
          ))}
        </div>
        
      </div>
    </div>
  );
};

// prop types
ScriptCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  downloads: PropTypes.number,
  ratings: PropTypes.number,
  categories: PropTypes.arrayOf(PropTypes.string),
  platforms: PropTypes.arrayOf(PropTypes.string),
};

export default ScriptCard;