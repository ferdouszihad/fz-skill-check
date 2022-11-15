import React from "react";
import { Button } from "react-bootstrap";
import { BeakerIcon } from "@heroicons/react/24/solid";
const Banner = () => {
  return (
    <section>
      <div className="container mx-auto row  align-items-center">
        <div className="col col-12 col-md-7">
          <h1 className="display-4 fw-bold mb-4">
            Explore Your Coding Skill with{" "}
            <span className="text-primary">Skill-Check</span>
          </h1>
          <Button
            variant="light"
            className="btn btn-lg btn-outline-primary d-flex gap-3"
          >
            <BeakerIcon className="h-6 w-6 text-blue-500" />
            Start Test
          </Button>
        </div>
        <div className="col col-12 col-md-5">
          <img
            src="https://c.tenor.com/flflC6GFzO8AAAAd/sultan-alrefaei-programmer.gif"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
