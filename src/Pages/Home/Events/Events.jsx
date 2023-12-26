import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useEvent from "../../../Hooks/useEvent";
import EventCard from "./EventCard";

const Events = () => {
  const [events] = useEvent();
  return (
    <div className="mb-20">
      <SectionTitle
        heading={"All Categories"}
        subHeading={"Explore Categories"}
      ></SectionTitle>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-8 justify-center items-center">
        {events.map((event) => (
          <EventCard key={event._id} event={event}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default Events;
