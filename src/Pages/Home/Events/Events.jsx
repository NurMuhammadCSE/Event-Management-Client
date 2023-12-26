import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useEvent from "../../../Hooks/useEvent";
import EventCard from "./EventCard";

const Events = () => {
  const [events] = useEvent();
  return (
    <div>
      <SectionTitle heading={"All Categories"} subHeading={"Explore Categories"}></SectionTitle>
      <div className="grid md:grid-cols-3 gap-3">
        {events.map((event) => (
          <EventCard key={event._id} event={event}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default Events;
