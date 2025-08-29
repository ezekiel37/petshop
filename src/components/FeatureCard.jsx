import React from 'react'

const FeatureCard = ({ icon, title, description, bgColor }) => {
  return (
  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-[24px]">
  <div className={`flex items-center justify-center rounded-full flex-shrink-0 w-12 h-12 sm:w-[60px] sm:h-[60px]`} style={{ background: bgColor }}>
        <img src={icon} alt="feature icon" className="w-9 h-9 object-contain" />
      </div>
  <div className="text-left flex flex-col gap-2 sm:gap-[8px]">
  <h4 className="font-semibold text-gray-900 leading-tight text-base sm:text-lg">{title}</h4>
  <p className="text-base text-gray-600 leading-tight">{description}</p>
      </div>
    </div>
  );
};


export default FeatureCard