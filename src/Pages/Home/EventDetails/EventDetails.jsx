import { useParams } from "react-router-dom";
import useEvent from "../../../Hooks/useEvent";
import { FaLocationArrow, FaUser } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { BiCategory } from "react-icons/bi";

const EventDetails = () => {
  const { category } = useParams();
  console.log(category);

  const [events] = useEvent();

  const eventCategories = events.filter((event) => event.category === `${category}`);
//   console.log(eventCategories);
  return (
    <div className="flex justify-center items-center gap-10">
      {eventCategories.map((item) => (
        <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={item.imageUrl} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body ">
            <h1 className="font-bold text-xl flex items-center gap-2"> <BiCategory /> {category}</h1>
            <h2 className="card-title">{item.title}</h2>
            <p className="flex items-center gap-2"> <MdOutlineDateRange /> {item.date}</p>

            <div className="flex justify-between ">
              <p className="flex items-center gap-2">
                <FaUser /> {item.attendees}
              </p>
              <p className="flex items-center gap-2" >
                {" "}
                <FaLocationArrow />
                {item.location}
              </p>
            </div>
            <div className="card-actions">
              <button className="btn btn-primary">Registration Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventDetails;
