import React from 'react';

const Button = ({ label, iconURL, backgroundColor = 'bg-coral-red', textColor = 'text-white', borderColor = 'border-e-coral-red' }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat rounded-full ${backgroundColor} ${textColor} ${borderColor}`}
      aria-label={label} // For accessibility
    >
      <span>{label}</span>
      {iconURL && (
        <img
          src={iconURL}
          alt=""
          className="w-5 h-5 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
