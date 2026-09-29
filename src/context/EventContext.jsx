import { createContext, useContext, useState } from "react";
import initialEvents from "../data/events";

const EventContext = createContext();

export function EventProvider({ children }) {
  const [events, setEvents] = useState(initialEvents);

  function registerForEvent(eventId) {
    setEvents((currentEvents) =>
      currentEvents.map((event) =>
        event.id === eventId && event.seats > 0
          ? { ...event, seats: event.seats - 1 }
          : event
      )
    );
  }

  return (
    <EventContext.Provider value={{ events, registerForEvent }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEvents() {
  return useContext(EventContext);
}