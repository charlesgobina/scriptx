import React from 'react';
import { Star, Download, Copy } from 'lucide-react';

const ScriptProfile = ({ 
  name, 
  description, 
  version, 
  platforms, 
  downloads, 
  rating, 
  installCommand 
}) => {
  const copyCommand = () => {
    navigator.clipboard.writeText(installCommand);
    alert('Command copied to clipboard!');
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      {/* Script Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-gray-800">{name}</h1>
        <div className="flex items-center space-x-2">
          <Star className="h-6 w-6 text-yellow-400" />
          <span className="text-lg text-gray-800">{rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Version and Platforms */}
      <div className="mb-6">
        <p className="text-lg font-semibold text-gray-800">Version: <span className="font-normal">{version}</span></p>
        <p className="text-lg font-semibold text-gray-800">Supported Platforms:</p>
        <div className="flex space-x-2 mt-2">
          {platforms.map((platform) => (
            <span key={platform} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
              {platform}
            </span>
          ))}
        </div>
      </div>

      {/* Install Command */}
      <div className="mb-6">
        <p className="text-lg font-semibold text-gray-800 mb-2">Install Command:</p>
        <div className="relative bg-gray-50 p-3 rounded-lg text-sm font-mono text-gray-800">
          <span>{installCommand}</span>
          <button
            onClick={copyCommand}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
          >
            <Copy className="h-5 w-5 inline" /> Copy
          </button>
        </div>
      </div>

      {/* Download Info */}
      <div className="flex items-center mb-6">
        <Download className="h-6 w-6 text-blue-500 mr-2" />
        <p className="text-gray-700 text-lg">{downloads.toLocaleString()} downloads</p>
      </div>

      {/* Additional Info */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-bold text-gray-800 mb-2">More Information</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Last updated: 2 weeks ago</li>
          <li>License: MIT</li>
          <li>Documentation: <a href="#" className="text-blue-500 hover:underline">View Docs</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ScriptProfile;
