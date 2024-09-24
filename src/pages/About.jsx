import React from "react";
import CountryApi from "../api/CountryApi.json";

const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the interesting facts
        <br />
        we're proud of
      </h2>
      <div className="gradient-cards">
        {CountryApi.map((countryElem) => {
          const { id, countryName, capital, population, interestingFact } =
            countryElem;
          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">Capital:</span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">Populations:</span>
                  {population}
                </p>
                <p>
                  <span className="card-description">IntrestingFacts:</span>
                  {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
