import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEvents } from "../context/EventContext";

function Registration() {
  const location = useLocation();

  const { events, registerForEvent } = useEvents();

  const [eventId, setEventId] = useState(
    location.state?.eventId || ""
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setMessage("");

    // Check empty fields
    if (!name.trim() || !email.trim() || !eventId) {
      setMessage("Please fill in all fields.");
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setMessage("Invalid email address.");
      return;
    }

    // Find selected event
    const selectedEvent = events.find(
      (event) => event.id === Number(eventId)
    );

    if (!selectedEvent) {
      setMessage("Please select an event.");
      return;
    }

    // Check seats
    if (selectedEvent.seats <= 0) {
      setMessage("Sorry, this event is full.");
      return;
    }

    // Reduce seat
    registerForEvent(Number(eventId));

    setMessage(
      `Registration successful for ${selectedEvent.name}!`
    );

    // Clear fields
    setName("");
    setEmail("");
  }

  return (
    <div className="page">
      <h1>Event Registration</h1>

      <form onSubmit={handleSubmit}>

        <label>Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label>Select Event</label>
        <select
          value={eventId}
          onChange={(e) => setEventId(e.target.value)}
        >
          <option value="">-- Select Event --</option>

          {events.map((event) => (
            <option
              key={event.id}
              value={event.id}
              disabled={event.seats === 0}
            >
              {event.name} - {event.seats} seats left
            </option>
          ))}
        </select>

        <button type="submit">
          Register
        </button>

        {message && (
          <p className="message">
            {message}
          </p>
        )}

      </form>
    </div>
  );
}

export default Registration;