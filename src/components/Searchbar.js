import React from "react";

export class Search extends React.Component {
  constructor() {
    super();

    this.state = { homeworld: "" };
  }
  toggleDetails(content, index) {
    let cardDetails = document.querySelectorAll(".card-details");
    let detailsBtn = document.querySelectorAll(".details-btn");
    for (let cardDetail of cardDetails) {
      cardDetail.classList.add("hidden");
    }

    for (let detailsBtns of detailsBtn) {
      detailsBtns.classList.add("hidden");
    }

    detailsBtn[index].classList.remove("hidden");
    cardDetails[index].classList.remove("hidden");

    if (this.props.fetchHomeChecker === "fetch") {
      this.fetchHomeWorld(content.homeworld);
    }
  }

  async fetchHomeWorld(url) {
    if (url === null) {
      this.setState({ homeworld: "null" });
    } else {
      fetch(url).then((resp) =>
        resp.json().then((result) => {
          this.setState({ homeworld: result });
        })
      );
    }
  }

  close(index) {
    let cardDetails = document.querySelectorAll(".card-details");
    let detailsBtn = document.querySelectorAll(".details-btn");
    detailsBtn[index].classList.add("hidden");
    cardDetails[index].classList.add("hidden");
  }

  homeworld() {
    return (
      <>
        <div className="details-home-world">
          <h2>{this.state.homeworld.name}</h2>
          <p>Rotation period: {this.state.homeworld.rotation_period}h</p>
          <p>Orbital period: {this.state.homeworld.orbital_period}days</p>
          <p>Climate: {this.state.homeworld.climate}</p>
          <p>Gravity: {this.state.homeworld.gravity}</p>
          <p>Population: {this.state.homeworld.population}</p>
          <p>Diameter:{this.state.homeworld.diameter}</p>
          <p>Terrain: {this.state.homeworld.terrain}</p>
        </div>
      </>
    );
  }

  people(content) {
    return (
      <>
        <div className="card-details hidden">
          <div className="details-content">
            <p>Birth year: {content.birth_year}</p>
            <p>Gender: {content.gender}</p>
            <p>Height: {content.height}cm</p>
            <p>Hair color: {content.hair_color}</p>
            <p>Eye color: {content.eye_color}</p>
          </div>
          {this.state.homeworld === "" ? null : <>{this.homeworld()}</>}
        </div>
      </>
    );
  }

  films(content) {
    return (
      <>
        <div className="card-details hidden">
          <div className="details-content">
            <p>Episode: {content.episode_id}</p>
            <p>Director: {content.director}</p>
            <p>Producer: {content.producer}</p>
            <p>Release date: {content.release_date}</p>
          </div>
        </div>
      </>
    );
  }

  planets(content) {
    return (
      <>
        <div className="card-details hidden">
          <div className="details-content">
            <p>Rotation period: {content.rotation_period}h</p>
            <p>Orbital period: {content.orbital_period}days</p>
            <p>Climate: {content.climate}</p>
            <p>Gravity: {content.gravity}</p>
            <p>Population: {content.population}</p>
            <p>Diameter:{content.diameter}</p>
            <p>Terrain: {content.terrain}</p>
          </div>
        </div>
      </>
    );
  }

  species(content) {
    return (
      <>
        <div className="card-details hidden">
          <div className="details-content">
            <p>classification: {content.classification}</p>
            <p>Average height: {content.average_height} cm</p>
            <p>Average lifespan: {content.average_lifespan}</p>
            <p>language: {content.language}</p>
          </div>

          {this.state.homeworld === "null" ? null : <>{this.homeworld()}</>}
        </div>
      </>
    );
  }

  starships(content) {
    return (
      <>
        <div className="card-details hidden">
          <div className="details-content">
            <p>Model: {content.model}</p>
            <p>Manufacturer: {content.manufacturer}</p>
            <p>
              Max atmosphering speed:
              {content.max_atmosphering_speed} km/h
            </p>
            <p>Crew: {content.crew}</p>
            <p>Passengers:{content.passengers}</p>
            <p>starship class: {content.starship_class}</p>
            <p>Cost in credits: {content.cost_in_credits}</p>
          </div>
        </div>
      </>
    );
  }

  vehicles(content) {
    return (
      <>
        <div className="card-details hidden">
          <div className="details-content">
            <p>Model: {content.model}</p>
            <p>Manufacturer: {content.manufacturer}</p>
            <p>
              Max atmosphering speed:
              {content.max_atmosphering_speed} km/h
            </p>
            <p>Crew: {content.crew}</p>
            <p>Passengers:{content.passengers}</p>
            <p>starship class: {content.starship_class}</p>
            <p>Cost in credits: {content.cost_in_credits}</p>
          </div>
        </div>
      </>
    );
  }

  render() {
    return (
      <div className="container-cards">
        {this.props.data
          .filter((content) => {
            return this.props.search.toLowerCase() === ""
              ? content
              : content.name.toLowerCase().includes(this.props.search);
          })
          .map((content, i) => {
            return (
              <div key={i} className="cards">
                <h2
                  className="card-title"
                  onClick={() => this.toggleDetails(content, i)}>
                  {this.props.titleChecker === "title"
                    ? content.title
                    : content.name}
                </h2>

                {this.props.page === "people" ? (
                  <>{this.people(content)}</>
                ) : null}
                {this.props.page === "films" ? (
                  <>{this.films(content)}</>
                ) : null}
                {this.props.page === "planets" ? (
                  <>{this.planets(content)}</>
                ) : null}
                {this.props.page === "species" ? (
                  <>{this.species(content)}</>
                ) : null}
                {this.props.page === "starships" ? (
                  <>{this.starships(content)}</>
                ) : null}
                {this.props.page === "vehicles" ? (
                  <>{this.vehicles(content)}</>
                ) : null}
                <button
                  className="details-btn hidden"
                  onClick={() => this.close(i)}>
                  close
                </button>
              </div>
            );
          })}
      </div>
    );
  }
}
