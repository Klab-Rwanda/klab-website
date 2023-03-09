import React from 'react';
import Outline from './outline';
import SecondSidebar from '../secondSidebar';

export default function SingleCompany() {
  return (
    <div className="wrapper">
      <Outline />
          <section className="single-content">
              <SecondSidebar />  
              <div className="single-holder">
              
              </div>     
      </section>
    </div>
  );
}
