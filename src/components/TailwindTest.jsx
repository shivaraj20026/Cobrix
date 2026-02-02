import React from 'react';

const TailwindTest = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 my-4">
      <div className="shrink-0">
        <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center">
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <div>
        <div className="text-xl font-medium text-secondary">Tailwind CSS Test</div>
        <p className="text-gray-500">If you can see this styled properly, Tailwind is working!</p>
      </div>
    </div>
  );
};

export default TailwindTest;
