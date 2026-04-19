import React from 'react';

const ShadowCircle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="inline-flex justify-center items-center size-12 rounded-full border-3 border-[#F6F8FF] bg-[#E5EBFF]">
      <div className="inline-flex justify-center items-center size-9 rounded-full bg-[#EDF1FF]">
        {children}
      </div>
    </div>
  );
};

export default ShadowCircle;