/* eslint-disable react/prop-types */
import "animate.css/animate.css";

const EventCard = ({ event }) => {
  return (
    <div>
      <div className="card w-96 h-96 bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
        <figure className="px-10 pt-10">
          <img
            src={event.imageUrl}
            alt={event.category}
            className="rounded-xl animate__animated animate__bounce"
            aria-label={event.title}
          />
        </figure>
        <div className="card-body items-center text-center p-4">
          <h2 className="card-title text-lg font-bold">{event.title}</h2>
          {event.category && <p className="text-gray-600">{event.category}</p>}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
