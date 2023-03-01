import React from 'react';
import HeadIntro from './HeadIntro';
import ProgramCard from './ProgramCard';

const ProgramsCards = () => {
  return (
    <div className="programCards-cmp">
      <div className="container-default">
        <HeadIntro
          title="OUR PROGRAMS"
          desc="We have several programs that helps people with different experinces getting started and strengthening their careers in tech as talents and enterpreneurs"
        />
        <div className="programCards-wrapper">
          <ProgramCard
            number="open now"
            title="TechUpskill"
            desc="A capacity building program for Tech Innovators & Tech Talents"
            linkTo="/program"
            image="/assets/website/images/program.jpg"
            color="brand-1"
          />
          <ProgramCard
            number="upcoming"
            title="Future coders"
            desc="A program dedicate for kids in their school vacancies and weekend programs"
            linkTo="/program"
            image="/assets/website/images/event.png"
            color="brand-dark"
          />
          <ProgramCard
            number="upcoming"
            title="Klab startups academy"
            desc="A capacity building program for Tech Innovators & Tech Talents"
            linkTo="/program"
            image="/assets/website/images/program.jpg"
            color="brand-1"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramsCards;
