import React from 'react';
import HeadIntro from './HeadIntro';
import ProgramCard from './ProgramCard';

const ProgramsCards = () => {
  return (
    <div className='programCards-cmp'>
      <div className='container-default'>
        <HeadIntro
          title='OUR PROGRAMS'
          desc='We have several programs that helps people with different experinces getting started and strengthening their careers in tech as talents and enterpreneurs'
        />
        <div className='programCards-wrapper'>
          <ProgramCard
            number='1'
            title='Future kids'
            desc='A program dedicate for kids in their school vacancies and weekend programs'
            linkTo='/program'
          />
          <ProgramCard
            number='2'
            title='Future kids'
            desc='A program dedicate for kids in their school vacancies and weekend programs'
            linkTo='/program'
          />
          <ProgramCard
            number='3'
            title='Future kids'
            desc='A program dedicate for kids in their school vacancies and weekend programs'
            linkTo='/program'
          />
          <ProgramCard
            number='4'
            title='Future kids'
            desc='A program dedicate for kids in their school vacancies and weekend programs'
            linkTo='/program'
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramsCards;
