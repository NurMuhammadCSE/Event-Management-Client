/* eslint-disable react/prop-types */
import "animate.css/animate.css";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <Link to={`/event/${event.category}`}>
      <div className="card w-60 h-48 bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
        <figure className="">
          <img
            src={event.imageUrl}
            alt={event.category}
            className="rounded animate__animated animate__bounce"
          />
        </figure>
        <div className="card-body items-center text-center p-4">
          {event.category && <p className="text-gray-600">{event.category}</p>}
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
