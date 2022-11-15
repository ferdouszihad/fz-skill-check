import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import TopicSingle from "./TopicSingle";

const Home = () => {
  const { data } = useLoaderData();

  return (
    <div>
      <Banner></Banner>
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

export default Home;
