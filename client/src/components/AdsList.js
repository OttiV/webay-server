import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EventsList extends Component {
  renderEvent(event) {
    return (
      <li key={event.id}>
        <Link to={`/events/${encodeURIComponent(event.id)}`}>{event.name}</Link>
      </li>
    );
  }

  render() {
    const { events } = this.props;

    return (
      <div className="events">
        <h1>Events List</h1>

        {!events && "Loading..."}

        {events && <ul>{events.map(this.renderEvent)}</ul>}
      </div>
    );
  }
}
