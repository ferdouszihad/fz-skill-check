import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TopicSingle = ({ topic }) => {
  const navigate = useNavigate();
  const { name, logo, total, id } = topic;
  return (
    <div className="col">
      <div className="card">
        <img src={logo} className="bg-dark m-3 rounded-3 img-fluid" alt="" />

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
