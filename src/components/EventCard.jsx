import { useNavigate } from "react-router-dom";

function EventCard({ event }) {
  const navigate = useNavigate();

  return (
    <div className="event-card">
      <h3>{event.name}</h3>
      <p>Category: {event.category}</p>
      <p>Fee: ₹{event.fee}</p>
      <p>Seats Left: {event.seats}</p>

      <button
        onClick={() =>
          navigate("/register", {
            state: { eventId: event.id }
          })
        }
        disabled={event.seats === 0}
      >
        {event.seats === 0 ? "Full" : "Register"}
      </button>
    </div>
  );
}

export default EventCard;