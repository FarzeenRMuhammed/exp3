import EventCard from "./EventCard";

function EventList({ events }) {
  return (
    <div>
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
        />
      ))}
    </div>
  );
}

export default EventList;