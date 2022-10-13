import React from 'react';
import Footer from '../components/websiteComponents/Footer';
import MissionCard from '../components/websiteComponents/MissionCard';
import NavBar from '../components/websiteComponents/Navbar';
import HERO_BANNER_IMG from '/assets/website/images/heroBanner.png';
import MISSION from '/assets/website/icons/mission.svg';
import VISSION from '/assets/website/icons/vission.svg';
import OBJECTIVE from '/assets/website/icons/objective.svg';
import HeadIntro from '../components/websiteComponents/HeadIntro';
import WhatWeDoCard from '../components/websiteComponents/WhatWeDoCard';
import WHAT_WE_DO from '/assets/website/icons/whatWeDoIcon.svg';
import TeamCmp from '../components/websiteComponents/TeamCmp';

const AboutPage = () => {
  return (
    <div className='about-page'>
      <NavBar />
      <div>
        <div className='hero-banner'>
          <img src={HERO_BANNER_IMG} alt='herobaner-bg' />
          <div className='content'>
            <div>
              <p>
                kLab provides an open space for IT entrepreneurs to collaborate
                and innovate in Kigali, Rwanda
              </p>
              <button type='submit' className='button'>
                Become a member
              </button>
            </div>
          </div>
        </div>

        <HeadIntro
          title='Klab Rwanda'
          desc=' We have several programs that helps people with different
                  experinces getting started and strengthening their careers in
                  tech We have several programs that helps people with different
                  experinces.'
        />

        <div className='missionCards-container container-default'>
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

        <div className='what-wedo'>
          <div className='content'>
            <div className='container-default'>
              <HeadIntro
                title='What we do'
                desc=' We have several programs that helps people with different
                  experinces getting started and strengthening their careers in
                  tech We have several programs that helps people with different
                  experinces getting started and strengthening their careers in
                  tech.'
              />

              <div className='cards-container'>
                <WhatWeDoCard
                  image={WHAT_WE_DO}
                  title='IT Support'
                  desc='We have several programs that helps people with different experinces getting started and strengthening their careers in tech '
                />

                <WhatWeDoCard
                  image={WHAT_WE_DO}
                  title='IT Support'
                  desc='We have several programs that helps people with different experinces getting started and strengthening their careers in tech '
                />

                <WhatWeDoCard
                  image={WHAT_WE_DO}
                  title='IT Support'
                  desc='We have several programs that helps people with different experinces getting started and strengthening their careers in tech '
                />

                <WhatWeDoCard
                  image={WHAT_WE_DO}
                  title='IT Support'
                  desc='We have several programs that helps people with different experinces getting started and strengthening their careers in tech '
                />
              </div>
            </div>
          </div>
        </div>
        <div className='team-container'>
          <TeamCmp />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
