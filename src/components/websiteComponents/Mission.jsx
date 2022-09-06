import React from 'react';
import MissionCard from './MissionCard';
import MISSION from '/assets/website/icons/mission.svg';
import VISSION from '/assets/website/icons/vission.svg';
import OBJECTIVE from '/assets/website/icons/objective.svg';
import MASK from '/assets/website/images/maskGroup.png';

const Mission = () => {
  return (
    <div className='mission-cmp'>
      <div className='left'>
        <MissionCard
          image={MISSION}
          title='Our Mission'
          desc='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to '
        />{' '}
        <MissionCard
          image={VISSION}
          title='Our Vission'
          desc='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to '
        />{' '}
        <MissionCard
          image={OBJECTIVE}
          title='Our Objective'
          desc='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to '
        />
      </div>
      <div className='right'>
        <img src={MASK} />
      </div>
    </div>
  );
};

export default Mission;
