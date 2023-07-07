import React from 'react'
import CommunityCard from '../../Card/CommunityCard';

const Info = () => {
  return (
    <div className="w-full rounded-3xl flex flex-col gap-6 justify-start items-start overflow-y-visible overflow-scroll scroll-m-4">
      <CommunityCard />
      <CommunityCard />
      <CommunityCard />
      <CommunityCard />
      <CommunityCard />
    </div>
  );
}

export default Info