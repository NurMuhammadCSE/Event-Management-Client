import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css"; // Import the default styles

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Eventify Banner"
          className="max-w-full lg:max-w-2xl rounded-lg shadow-2xl"
        />
        <div className="text-center items-center p-4 lg:p-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Discover Unforgettable Experiences
          </h1>
          <p className="text-lg lg:text-xl mb-6">
            Eventify: Where Moments Become Memories. Elevate your gatherings
            with seamless event planning, innovative solutions, and
            unforgettable experiences. Let us bring your vision to life and make
            every celebration extraordinary.
          </p>
          <AwesomeButton
            type="primary"
            size="large"
            cssModule={{
              button: "my-custom-button-class", // Add your custom class here
            }}
          >
            Start Planning
          </AwesomeButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
