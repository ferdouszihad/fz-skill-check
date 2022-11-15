import React from "react";

const Question = ({ data }) => {
  console.log(data);
  const { question, correctAnswer, options } = data;
  return (
    <div className="col">
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{question}</h5>
          <div className="card-text options mb-3 row row-cols-2 g-3">
            {options.map((opt) => (
              <div className="col">
                <p className=" h-100 d-flex align-items-center p-2 border border-2 cursor-pointer rounded">
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
