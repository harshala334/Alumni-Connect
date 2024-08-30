//import React from 'react';
//import { Link } from 'react-router-dom';
import EventCard from './EventCard';

function HomePage() {
  const events = [
    { id: 1, day: '24', month: 'JULY', eventName: 'Celebration Day', description: 'Celebration day for today' },
    // Add more events as needed
  ];

  return (
    <div className="content">
      <div className="content-mid">
        <div className="container">
          <div className="content-mid-top">
            <h3>Events</h3>
            <p>
              It is important to carry out a good follow-up marketing of alumni events.
              With over 100 worldwide events a year, you have a wealth of alumni networking opportunities.
            </p>
          </div>
          <div className="news">
            {events.map((event) => (
              <EventCard 
                key={event.id} 
                day={event.day} 
                month={event.month} 
                eventName={event.eventName} 
                description={event.description}
                link={`/event/${event.id}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
