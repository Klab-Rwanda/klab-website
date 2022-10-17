import React from 'react';
import Footer from '../components/websiteComponents/Footer';
import NavBar from '../components/websiteComponents/Navbar';
import HERO_BANNER_IMG from '/assets/website/images/event.png';
import { Link } from 'react-router-dom';

const SingleProgramPage = () => {
  return (
    <div className='single-program-page'>
      <NavBar />
      <div>
        <div className='hero-banner-single-event'>
          <img src={HERO_BANNER_IMG} alt='herobaner-bg' />
          <div className='content '>
            <div className=' container-default'>
              <div className='content-container'>
                <h1>Klab Startups academy</h1>
              </div>
            </div>
          </div>
        </div>
        <div className=' single-program-body container-default'>
          <div className='intro'>
            <h1>Klab Startups academy</h1>
            <div className='tags'>
              <p className='tag'>Innovators</p>
              <p className='tag'>It talents</p>
            </div>
            <p className='desc'>
              In Rwanda, most of the innovations in technology, start-ups, or
              even ideas, supporting projects and initiatives are concentrated
              in the capital city of Kigali and there is little knowledge about
              IT talents outside the capital. Therefore; kLab initiated the
              project to create awareness, build interest in young people, and
              identify promising future IT talents in the 4 provincesoutside if
              Kigalithat can be further supported. The project will be conducted
              during 5 months from October to February, in three phases: Talent
              detection across the country, training, and organising a hackathon
            </p>
          </div>
          <div className='why'>
            <h3>Why should you apply</h3>
            <ol>
              <li> Access to incubation programs</li>
              <li> Membership at klab</li>
              <li> Mentorship</li>
              <li> And many more...</li>
            </ol>
          </div>
          <div className='requirements'>
            <div className='left'>
              <h3>INNOVATORS</h3>
              <p className='subtitle'>Requirements</p>
              <ol>
                <li>Having a business idea/project in Software</li>
                <li>
                  Having a design of your business idea/project as a mockup of
                  your software project(ie. web or app design)
                </li>
                <li>
                  Being a university students, fresh graduate or high school
                  graduate
                </li>
                <li>
                  Having a Laptop 5. Being committed 6. Currently residing in
                  Rwanda
                </li>
              </ol>
            </div>
            <div className='right'>
              <h3>IT TALENTS</h3>
              <p className='subtitle'>Requirements</p>
              <ol>
                <li>Having a business idea/project in Software</li>
                <li>
                  Having a design of your business idea/project as a mockup of
                  your software project(ie. web or app design)
                </li>
                <li>
                  Being a university students, fresh graduate or high school
                  graduate
                </li>
                <li>
                  Having a Laptop 5. Being committed 6. Currently residing in
                  Rwanda
                </li>
              </ol>
            </div>
          </div>
          <div className='apply'>
            <h2 className='deadline'>Application Deadline: 4th November</h2>
            <Link to='/apply/techupSkills'>
              <button className='button'>Apply now</button>
            </Link>
          </div>
          <div className='garelly'>
            <h2 className='title'>Garelly</h2>
            <div className='garelly-images'>
              <div className='image'>
                <img src={HERO_BANNER_IMG} alt='' />
              </div>{' '}
              <div className='image'>
                <img src={HERO_BANNER_IMG} alt='' />
              </div>{' '}
              <div className='image'>
                <img src={HERO_BANNER_IMG} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProgramPage;
