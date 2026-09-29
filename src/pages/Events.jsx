import EventList from "../components/EventList";
import { useEvents } from "../context/EventContext";

function Events() {
  const { events } = useEvents();

  return (
    <div className="page">
      <h1>TechFest Events</h1>
      <EventList events={events} />
    </div>
  );
}

export default Events;