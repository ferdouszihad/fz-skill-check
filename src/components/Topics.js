import React from "react";
import { useLoaderData } from "react-router-dom";
import TopicSingle from "./TopicSingle";

const Topics = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2 class="py-3 m-2 rounded-2 bg-dark text-light text-center">
        Today Topics
      </h2>
      <section className="container-fluid">
        <div className="container my-5">
          <h2 className="text-center my-3 mb-5">Choose Your Topic</h2>
          <div className="card-container container">
            {
              <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 ">
                {data.map((topic) => (
                  <TopicSingle key={topic.id} topic={topic}></TopicSingle>
                ))}
              </div>
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Topics;
