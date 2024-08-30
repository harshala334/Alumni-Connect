//import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './EventCard.css';

function EventCard({ day, month, eventName, description, link }) {
  return (
    <div className="event-card">
      <div className="date-box">
        <h4>{day}<span>{month}</span></h4>
      </div>
      <div className="event-details">
        <h3>{eventName}</h3>
        <p>{description}</p>
      </div>
      <div className="read-more">
        <Link to={link}>
          <button className="read-more-btn">Read More</button>
        </Link>
      </div>
    </div>
  );
}

EventCard.propTypes = {
  day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  month: PropTypes.string.isRequired,
  eventName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default EventCard;
