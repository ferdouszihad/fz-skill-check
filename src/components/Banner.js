import React from "react";
import { Button } from "react-bootstrap";

import { FiPlay } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="container mx-auto row  align-items-center">
        <div className="col col-12 col-md-7">
          <h1 className="display-4 fw-bold mb-4">
            Explore Your Coding Skill with{" "}
            <span className="text-primary">Skill-Check</span>
          </h1>
          <Button
            onClick={() => navigate("/topics")}
            variant="light"
            className="btn btn-lg btn-outline-primary d-flex align-items-center gap-2"
          >
            <FiPlay></FiPlay> Start Test
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
