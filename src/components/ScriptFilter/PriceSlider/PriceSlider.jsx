import  { useState } from 'react';

const PricingSlider = () => {
  const [price, setPrice] = useState(50); // Default price value

  const handleSliderChange = (e) => {
    setPrice(Number(e.target.value));
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      {/* Slider */}
      <div className="flex items-center justify-center space-x-4">
        <span className="text-gray-500">$0</span>
        <input
          type="range"
          min="0"
          max="100"
          value={price}
          onChange={handleSliderChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <span className="text-gray-500">$100</span>
      </div>

      {/* Price Display */}
      <div className="mt-6 text-center">
        <span className="text-4xl font-bold text-blue-500">${price}</span>
        <p className="text-gray-500 mt-1">per month</p>
      </div>

      {/* CTA Button */}
      <div className="mt-6 flex justify-center">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricingSlider;
