//import React from 'react';
//import { useParams } from 'react-router-dom';
import './EventDetails.css';

function EventDetails() {
  //const { eventId } = useParams();

  // You can fetch the event data based on the `eventId` or use static data for now
  const event = {
    location: 'Bangalore',
    date: '24-07-2020',
    time: '01:00 AM',
    description: 'Celebration day for today',
  };

  return (
    <div className="event-info">
      <h2>Event Information</h2>
      <form>
        <div className="form-group">
          <label>Location</label>
          <input type="text" value={event.location} readOnly />
        </div>
        <div className="form-group">
          <label>Event Date</label>
          <input type="text" value={event.date} readOnly />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input type="text" value={event.time} readOnly />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea value={event.description} readOnly />
        </div>
      </form>
    </div>
  );
}

export default EventDetails;
