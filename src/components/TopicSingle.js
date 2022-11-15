import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TopicSingle = ({ topic }) => {
  const navigate = useNavigate();
  const { name, logo, total, id } = topic;
  return (
    <div className="col">
      <div class="card  ">
        <img
          src={logo}
          class=" m-3 bg-dark rounded-3"
          alt={name}
          className="img-fluid"
        />
        <div class="card-body d-flex justify-content-between">
          <h5 class="card-title">{name}</h5>
          <small className="text-danger fw-bold">{total} Question</small>
        </div>
        <div className="button d-flex justify-content-center">
          <Button
            onClick={() => navigate(`/quiz/${id}`)}
            variant="outline-primary"
            className="d-block w-75 my-3"
          >
            Start Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopicSingle;
