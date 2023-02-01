import React from "react";

import img from "../assets/darth-vader.png";

export function Home() {
  return (
    <main className="container-main">
      <section className="main-header">
        <h1>Wookie mistake</h1>
        <p>
          API from <strong>Swapi</strong>
        </p>
      </section>
      <div className="main-about-us">
        <figure className="about-us-img">
          <img className="img" src={img} alt="darth-vader" />
        </figure>
        <section className="about-us-section">
          <h3>About us</h3>
          <p>
            This is a school project made by Niklas and Hampus. The API our
            teacher provides to us is from Swapi and our assignment is to pick a
            framework and make a SPA(single page application) with categorised
            pages and respective detials for each page, We choose react as our
            framework it has been a learning curve but a fun one. We do home you
            enjoy our site
          </p>
        </section>
      </div>
    </main>
  );
}
