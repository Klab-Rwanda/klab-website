import React from 'react';
import EventCard from './EventCard';
import HeadIntro from './HeadIntro';
import PLACE_HOLDER from '/assets/website/images/event.png';

const EventsCards = () => {
  const categories = ['upcoming', 'techup skills', 'juniors', 'meetups'];
  const eventsList = [
    {
      id: 1,
      image: PLACE_HOLDER,
      date: '12/sept/2022',
      title: 'Huye -Techup Skills',
      desc: 'We have several programs that helps people with different experinces getting started and strengthening '
    },
    {
      id: 2,
      image: PLACE_HOLDER,
      date: '12/sept/2022',
      title: 'Huye -Techup Skills',
      desc: 'We have several programs that helps people with different experinces getting started and strengthening '
    },
    {
      id: 3,
      image: PLACE_HOLDER,
      date: '12/sept/2022',
      title: 'Huye -Techup Skills',
      desc: 'We have several programs that helps people with different experinces getting started and strengthening We have several programs that helps people with different experinces getting started and strengtheninWe have several programs that helps people with different experinces getting started and strengtheninWe have several programs that helps people with different experinces getting started and strengthenin '
    },
    {
      id: 4,
      image: PLACE_HOLDER,
      date: '12/sept/2022',
      title: 'Huye -Techup Skills',
      desc: 'We have several programs that helps people with different experinces getting started and strengthening '
    },
    {
      id: 5,
      image: PLACE_HOLDER,
      date: '12/sept/2022',
      title: 'Huye -Techup Skills',
      desc: 'We have several programs that helps people with different experinces getting started and strengthening '
    }
  ];

  const recentEvents = [
    {
      id: 1,
      image: PLACE_HOLDER,
      date: '12/sept/2022',
      title: 'Huye -Techup Skills',
      desc: 'We have several programs that helps people with different experinces getting started and strengthening '
    },
    {
      id: 2,
      image: PLACE_HOLDER,
      date: '12/sept/2022',
      title: 'Huye -Techup Skills',
      desc: 'We have several programs that helps people with different experinces getting started and strengthening '
    }
  ];
  return (
    <div className='eventsCards-cmp'>
      <div className='events-page__events-header'>
        <HeadIntro title='Upcoming Events' />
        <div className='filter'>
          <select className='categories'>
            <option value=''>Select</option>;
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='cards-wrapper'>
        {eventsList.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            image={event.image}
            date={event.date}
            title={event.title}
            desc={event.desc}
          />
        ))}
        <EventCard />
      </div>

      <div className='recent-events'>
        <div className='events-page__events-header'>
          <HeadIntro title='Recent Events' />
        </div>

        <div className='cards-wrapper'>
          {recentEvents.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              image={event.image}
              date={event.date}
              title={event.title}
              desc={event.desc}
            />
          ))}
          <EventCard />
        </div>
      </div>
    </div>
  );
};

export default EventsCards;
