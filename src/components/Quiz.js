import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question";

const Quiz = () => {
  const { data } = useLoaderData();
  const { logo, name, questions } = data;
  return (
    <div className="exam-container">
      <div className="container py-5">
        <div className="exam-title d-flex gap-3 align-items-center text-center bg-dark text-light p-3 rounded-3">
          <div>
            <img
              src={logo}
              alt=""
              style={{ maxWidth: "50px" }}
              className="rounded-circle"
            />
          </div>

          <h2>{name} exam </h2>
        </div>
        <p className="fst-italic fw-bold text-danger mt-2">
          total {questions.length} question Found
        </p>

        <div className="question-container mt-2 mb-5">
          {questions.map((q) => (
            <Question key={q.id} data={q}></Question>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
