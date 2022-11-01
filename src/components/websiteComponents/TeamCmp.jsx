import { useState } from 'react';
import HeadIntro from './HeadIntro';
import PLACE_HOLDER from '/assets/website/images/profilePlaceHolder.svg';
import FB from '/assets/website/icons/fb.svg';
import TWITTER from '/assets/website/icons/twitter.svg';
import LINKEDIN from '/assets/website/icons/linkedin.svg';
import IG from '/assets/website/icons/ig.svg';
import { Link } from 'react-router-dom';

function TeamCmp() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className='team-cmp'>
      <HeadIntro
        title='OurTeam'
        desc='We have several programs that helps people with different experinces getting started and strengthening their careers in tech '
      />
      <div className='wraper container-default'>
        <div className='tabs-wraper'>
          <div className='tabs'>
            <div
              data-tab-item
              className={toggleState === 1 ? 'tab active-tabs' : 'tab'}
              onClick={() => toggleTab(1)}
            >
              <div className='image'>
                <img src={PLACE_HOLDER} />
              </div>
              <div className='intro'>
                <h3 className='name'>B.Consolatrice</h3>
                <p className='role'>Project manager</p>
              </div>
            </div>

            <div
              data-tab-item
              className={toggleState === 2 ? 'tab active-tabs' : 'tab'}
              onClick={() => toggleTab(2)}
            >
              <div className='image'>
                <img src={PLACE_HOLDER} />
              </div>
              <div className='intro'>
                <h3 className='name'>U.Nicole</h3>
                <p className='role'>Project manager</p>
              </div>
            </div>

            <div
              data-tab-item
              className={toggleState === 3 ? 'tab active-tabs' : 'tab'}
              onClick={() => toggleTab(3)}
            >
              <div className='image'>
                <img src={PLACE_HOLDER} />
              </div>
              <div className='intro'>
                <h3 className='name'>N. Issa</h3>
                <p className='role'>Project manager</p>
              </div>
            </div>
            <div
              data-tab-item
              className={toggleState === 1 ? 'tab active-tabs' : 'tab'}
              onClick={() => toggleTab(1)}
            >
              <div className='image'>
                <img src={PLACE_HOLDER} />
              </div>
              <div className='intro'>
                <h3 className='name'>B.Consolatrice</h3>
                <p className='role'>Project manager</p>
              </div>
            </div>

            <div
              data-tab-item
              className={toggleState === 2 ? 'tab active-tabs' : 'tab'}
              onClick={() => toggleTab(2)}
            >
              <div className='image'>
                <img src={PLACE_HOLDER} />
              </div>
              <div className='intro'>
                <h3 className='name'>B.Consolatrice</h3>
                <p className='role'>Project manager</p>
              </div>
            </div>

            <div
              data-tab-item
              className={toggleState === 3 ? 'tab active-tabs' : 'tab'}
              onClick={() => toggleTab(3)}
            >
              <div className='image'>
                <img src={PLACE_HOLDER} />
              </div>
              <div className='intro'>
                <h3 className='name'>B.Consolatrice</h3>
                <p className='role'>Project manager</p>
              </div>
            </div>
          </div>
        </div>

        <div className='content-tabs'>
          <div
            className={
              toggleState === 1 ? 'content  active-content' : 'content'
            }
          >
            <div className='image'>
              <img src={PLACE_HOLDER} />
            </div>
            <div className='intro'>
              <h3 className='name'>B.Consolatrice</h3>
              <p className='role'>Project manager</p>
            </div>
            <div className='desc'>
              <p>
                We have several programs that helps people with different
                experinces getting started and strengthening their careers in
                tech We have several programs that helps people with different
                experinces getting started and strengthening their careers in
                tech We have
              </p>
            </div>
            <div className='socials'>
              <div className='item'>
                <Link to='/'>
                  <img src={FB} alt='fb' />
                </Link>
              </div>
              <div className='item'>
                <Link to='/'>
                  <img src={TWITTER} alt='twitter' />
                </Link>
              </div>

              <div className='item'>
                <Link to='/'>
                  <img src={IG} alt='twitter' />
                </Link>
              </div>
              <div className='item'>
                <Link to='/'>
                  <img src={LINKEDIN} alt='twitter' />
                </Link>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? 'content  active-content' : 'content'
            }
          >
            <div className='image'>
              <img src={PLACE_HOLDER} />
            </div>
            <div className='intro'>
              <h3 className='name'>U. Nicole</h3>
              <p className='role'>Project manager</p>
            </div>
            <div className='desc'>
              <p>
                We have several programs that helps people with different
                experinces getting started and strengthening their careers in
                tech{' '}
              </p>
            </div>
            <div className='socials'>
              <div className='item'>
                <Link to='/'>
                  <img src={FB} alt='fb' />
                </Link>
              </div>
              <div className='item'>
                <Link to='/'>
                  <img src={TWITTER} alt='twitter' />
                </Link>
              </div>

              <div className='item'>
                <Link to='/'>
                  <img src={IG} alt='twitter' />
                </Link>
              </div>
              <div className='item'>
                <Link to='/'>
                  <img src={LINKEDIN} alt='twitter' />
                </Link>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 3 ? 'content  active-content' : 'content'
            }
          >
            <div className='image'>
              <img src={PLACE_HOLDER} />
            </div>
            <div className='intro'>
              <h3 className='name'>N. Issa</h3>
              <p className='role'>Engineer</p>
            </div>
            <div className='desc'>
              <p>
                We have several programs that helps people with different
                experinces getting started and strengthening their careers in
                tech{' '}
              </p>
            </div>
            <div className='socials'>
              <div className='item'>
                <Link to='/'>
                  <img src={FB} alt='fb' />
                </Link>
              </div>
              <div className='item'>
                <Link to='/'>
                  <img src={TWITTER} alt='twitter' />
                </Link>
              </div>

              <div className='item'>
                <Link to='/'>
                  <img src={IG} alt='twitter' />
                </Link>
              </div>
              <div className='item'>
                <Link to='/'>
                  <img src={LINKEDIN} alt='twitter' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCmp;
