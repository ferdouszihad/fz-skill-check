import React from "react";
import { Button } from "react-bootstrap";
import { FiEye } from "react-icons/fi";
const Question = ({ data }) => {
  console.log(data);
  const { question, correctAnswer, options, id } = data;

  const showRight = () => {
    alert(correctAnswer);
  };

  return (
    <div className="col">
      <div className="card mb-3 w-75 mx-auto">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div className="question">
              <h5 className="card-title mb3">{question}</h5>
              <p>
                <span className="text-success fw-bold fst-italic">
                  {" "}
                  Select 1 out of 4
                </span>
              </p>
            </div>
            <div className="button">
              <Button
                variant="light"
                className="btn-outline-primary rounded-circle"
                onClick={showRight}
              >
                <FiEye className="m-0"></FiEye>
              </Button>
            </div>
          </div>

          <div className="card-text options mb-3 row row-cols-2 g-3">
            {options.map((opt) => (
              <div className="col">
                <p className=" option-single h-100 d-flex align-items-center p-2 border border-2 cursor-pointer rounded">
                  {opt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
