import React from 'react';
import Footer from '../components/websiteComponents/Footer';
import HeadIntro from '../components/websiteComponents/HeadIntro';
import NavBar from '../components/websiteComponents/Navbar';
import HERO_BANNER_IMG from '/assets/website/images/event.png';

const ApplyTechupSkillsPage = () => {
  return (
    <div className='apply-techup-skills-page'>
      <NavBar />
      <div>
        <div className='hero-banner'>
          <img src={HERO_BANNER_IMG} alt='herobaner-bg' />
          <div className='content '>
            <div className=' container-default'>
              <div className='content-container'>
                <h1>Apply to techup skills program</h1>
                <p>
                  kLab provides an open space for IT entrepreneurs to
                  collaborate and innovate in Kigali, Rwanda.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='apply-page-body container-default'>
          <HeadIntro
            title='Application Details'
            desc='The project will be conducted during 5 months from October to February, in three phases: Talent detection across the country, training, and organising a hackathon.'
          />
          <form className='form'>
            <h4>Basic info</h4>

            <div className='basicInfo'>
              <div className='left'>
                <div className='input'>
                  <label>Full names</label>
                  <input type='text' name='name' placeholder='Full name' />
                </div>
                <div className='input'>
                  <label>Email</label>
                  <input type='email' name='email' placeholder='Email' />
                </div>
                <div className='input'>
                  <label>Phone number</label>
                  <input type='text' name='phone' placeholder='Phone number' />
                </div>
                <div className='input'>
                  <label>Date of birth</label>
                  <input type='date' name='date' placeholder='Date of birth' />
                </div>
              </div>
              <div className='right'>
                <div className='input'>
                  <label>Select province</label>
                  <select name='cars' id='cars'>
                    <option value='volvo'>Eastern Province</option>
                    <option value='volvo'>Kigali City</option>
                    <option value='saab'>Northern Province</option>
                    <option value='mercedes'>Southern Province</option>
                    <option value='audi'>Western Province</option>
                  </select>
                </div>
                <div className='input'>
                  <label>Select District</label>
                  <select name='districts' id='districts'>
                    <option value='Bugesera'>Bugesera</option>
                    <option value='Burera'>Burera</option>
                    <option value='Gakenke'>Gakenke</option>
                    <option value='Gasabo'>Gasabo</option>
                    <option value='Gatsibo'>Gatsibo</option>
                    <option value='Gicumbi'>Gicumbi</option>
                    <option value='Gisagara'>Gisagara</option>
                    <option value='Huye'>Huye</option>
                    <option value='Kamonyi'>Kamonyi</option>
                    <option value='Karongi'>Karongi</option>
                    <option value='Kayonza'>Kayonza</option>
                    <option value='Kicukiro'>Kicukiro</option>
                    <option value='Kirehe'>Kirehe</option>
                    <option value='Muhanga'>Muhanga</option>
                    <option value='Musanze'>Musanze</option>
                    <option value='Ngoma'>Ngoma</option>
                    <option value='Ngororero'>Ngororero</option>
                    <option value='Nyabihu'>Nyabihu</option>
                    <option value='Nyagatare'>Nyagatare</option>
                    <option value='Nyamagabe'>Nyamagabe</option>
                    <option value='Nyamasheke'>Nyamasheke</option>
                    <option value='Nyanza'>Nyanza</option>
                    <option value='Nyarugenge'>Nyarugenge</option>
                    <option value='Nyaruguru'>Nyaruguru</option>
                    <option value='Rubavu'>Rubavu</option>
                    <option value='Ruhango'>Ruhango</option>
                    <option value='Rulindo'>Rulindo</option>
                    <option value='Rusizi'>Rusizi</option>
                    <option value='Rutsiro'>Rutsiro</option>
                    <option value='Rwamagana'>Rwamagana</option>
                  </select>
                </div>
                <div className='input'>
                  <label>Select Gender</label>
                  <select name='cars' id='cars'>
                    <option value='volvo'>Male</option>
                    <option value='volvo'>Female</option>
                    <option value='saab'>Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>

            <h4>Work/Experience info</h4>

            <div className='basicInfo'>
              <div className='left'>
                <div className='radio-input'>
                  <p>Are you a graduate or a student?</p>
                  <div className='option'>
                    <div>
                      <input type='radio' name='work' value='graduate' />
                    </div>
                    <div>
                      <label for='html'>Graduate</label>
                    </div>
                  </div>

                  <div className='option'>
                    <div>
                      <input type='radio' name='work' value='student' />
                    </div>
                    <div>
                      <label for='html'>Student</label>
                    </div>
                  </div>

                  <div className='option'>
                    <div>
                      <input type='radio' name='work' value='other' />{' '}
                    </div>
                    <div>
                      <label for='html'>Other</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='right'>
                <div className='radio-input'>
                  <p>Education level</p>
                  <div className='option'>
                    <div>
                      <input
                        type='radio'
                        name='edu_level'
                        value='high_school'
                      />
                    </div>
                    <div>
                      <label for='html'>High School</label>
                    </div>
                  </div>

                  <div className='option'>
                    <div>
                      <input type='radio' name='edu_level' value='student' />
                    </div>
                    <div>
                      <label for='html'>Student(University)</label>
                    </div>
                  </div>

                  <div className='option'>
                    <div>
                      <input type='radio' name='edu_level' value='graduate' />{' '}
                    </div>
                    <div>
                      <label for='html'>Graduate(From university)</label>
                    </div>
                  </div>

                  <div className='option'>
                    <div>
                      <input type='radio' name='edu_level' value='master' />{' '}
                    </div>
                    <div>
                      <label for='html'>Masters</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='basicInfo'>
              <div className='left'>
                <div className='input'>
                  <label>From which school/university?</label>
                  <input type='text' name='school' placeholder='School' />
                </div>
                <div className='input'>
                  <label>Year of study</label>
                  <select name='cars' id='cars'>
                    <option value='year 1'>High school graduate</option>
                    <option value='year 1'>Year 1</option>
                    <option value='year 2'>Year 2</option>
                    <option value='year 3'>Year 3</option>
                    <option value='year 4'>Year 4</option>
                    <option value='year 5'>Year 5</option>
                  </select>
                </div>
              </div>
              <div className='right'>
                <div className='input'>
                  <label>Field of study/Option/Faculity</label>
                  <input type='text' name='faculty' placeholder='Field' />
                </div>
              </div>
            </div>

            <button className='button' type='submit'>
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApplyTechupSkillsPage;
