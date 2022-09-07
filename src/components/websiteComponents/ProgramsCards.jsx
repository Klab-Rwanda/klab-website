import React from 'react';
import HeadIntro from './HeadIntro';
import ProgramCard from './ProgramCard';

const ProgramsCards = () => {
  return (
    <div className='programCards-cmp'>
      <div className='container'>
        <HeadIntro
          title='OUR PROGRAMS'
          desc='We have several programs that helps people with different experinces getting started and strengthening their careers in tech as talents and enterpreneurs'
        />
        <div className='programCards-wrapper'>
          <ProgramCard
            number='1'
            title='Future kids'
            desc='A program dedicate for kids in their school vacancies and weekend programs'
          />
          <ProgramCard
            number='1'
            title='Future kids'
            desc='A program dedicate for kids in their school vacancies and weekend programs'
          />
          <ProgramCard
            number='1'
            title='Future kids'
            desc='A program dedicate for kids in their school vacancies and weekend programs'
          />
          <ProgramCard
            number='1'
            title='Future kids'
            desc='A program dedicate for kids in their school vacancies and weekend programs'
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramsCards;
