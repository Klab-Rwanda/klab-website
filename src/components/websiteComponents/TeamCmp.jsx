import { useState } from 'react';
import HeadIntro from './HeadIntro';
import PLACE_HOLDER from '/assets/website/images/profilePlaceHolder.svg';

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
              className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
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
              className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
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
              className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
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
            <div
              data-tab-item
              className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
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
              className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
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
              className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
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
            <div className='intro'>
              <h3 className='name'>B.Consolatrice</h3>
              <p className='role'>Project manager</p>
            </div>
            <div className='desc'>
              <p>
                We have several programs that helps people with different
                experinces getting started and strengthening their careers in
                tech{' '}
              </p>
            </div>
            <div className='socials'>social medias</div>
          </div>

          <div
            className={
              toggleState === 2 ? 'content  active-content' : 'content'
            }
          >
            <h2>Content 2</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptatum qui adipisci.
            </p>
          </div>

          <div
            className={
              toggleState === 3 ? 'content  active-content' : 'content'
            }
          >
            <h2>Content 3</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCmp;
