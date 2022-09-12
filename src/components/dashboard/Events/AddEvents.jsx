import React from 'react'

const AddEvents = () => {
  return (
    <div className="event-container">
      <div className="event-form">
        <form>
          <h2>Add Event </h2>
          <div className="events">
            <div className="event-data">
              <label>Event Title</label>
              <input placeholder="Enter Title" />
            </div>
            <div className='event-date'>
              <div className="event-data">
                <label>From:</label>
                <input placeholder="Start Date" />
              </div>
              <div className="event-data">
                <label>To:</label>
                <input placeholder="End Date" />
              </div>
            </div>
            <div className="event-data">
              <label>Event Description</label>
              <textarea placeholder="Enter Description" />
            </div>
            <div className="event-button">
              <button className='button'>Add Task</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEvents