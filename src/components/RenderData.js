import React from "react";

export class RenderData extends React.Component {
  constructor() {
    super();

    this.state = { homeworld: "" };
  }
  toggleDetails(content, index) {
    let details = document.querySelectorAll(".details");
    let detailsBtn = document.querySelectorAll(".details-btn");
    for (let detail of details) {
      detail.classList.add("hidden");
    }

    for (let detailsBtns of detailsBtn) {
      detailsBtns.classList.add("hidden");
    }

    detailsBtn[index].classList.remove("hidden");
    details[index].classList.remove("hidden");

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
    let details = document.querySelectorAll(".details");
    let detailsBtn = document.querySelectorAll(".details-btn");
    detailsBtn[index].classList.add("hidden");
    details[index].classList.add("hidden");
  }

  homeworld() {
    return (
      <>
        <h2>{this.state.homeworld.name}</h2>
        <div className="content-home-world">
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
        <div className="details hidden">
          <div className="details-content">
            <div className="content-detials">
              <p>Birth year: {content.birth_year}</p>
              <p>Gender: {content.gender}</p>
              <p>Height: {content.height}cm</p>
              <p>Hair color: {content.hair_color}</p>
              <p>Eye color: {content.eye_color}</p>
            </div>
            {this.state.homeworld === "" ? null : <>{this.homeworld()}</>}
          </div>
        </div>
      </>
    );
  }

  films(content) {
    return (
      <>
        <div className="details hidden">
          <div className="details-content">
            <div className="content-detials">
              <p>Episode: {content.episode_id}</p>
              <p>Director: {content.director}</p>
              <p>Producer: {content.producer}</p>
              <p>Release date: {content.release_date}</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  planets(content) {
    return (
      <>
        <div className="details hidden">
          <div className="details-content">
            <div className="content-detials">
              <p>Rotation period: {content.rotation_period}h</p>
              <p>Orbital period: {content.orbital_period}days</p>
              <p>Climate: {content.climate}</p>
              <p>Gravity: {content.gravity}</p>
              <p>Population: {content.population}</p>
              <p>Diameter:{content.diameter}</p>
              <p>Terrain: {content.terrain}</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  species(content) {
    return (
      <>
        <div className="details hidden">
          <div className="details-content">
            <div className="content-detials">
              <p>classification: {content.classification}</p>
              <p>Average height: {content.average_height} cm</p>
              <p>Average lifespan: {content.average_lifespan}</p>
              <p>language: {content.language}</p>
            </div>

            {this.state.homeworld === "null" ? null : <>{this.homeworld()}</>}
          </div>
        </div>
      </>
    );
  }

  starships(content) {
    return (
      <>
        <div className="details hidden">
          <div className="details-content">
            <div className="content-detials">
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
        </div>
      </>
    );
  }

  vehicles(content) {
    return (
      <>
        <div className="details hidden">
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
      <>
        {this.props.results.map((result, i) => {
          return (
            <div key={i}>
              <h2 onClick={() => this.toggleDetails(result, i)}>
                {this.props.titleChecker === "title"
                  ? result.title
                  : result.name}
              </h2>

              {this.props.page === "people" ? <>{this.people(result)}</> : null}
              {this.props.page === "films" ? <>{this.films(result)}</> : null}
              {this.props.page === "planets" ? (
                <>{this.planets(result)}</>
              ) : null}
              {this.props.page === "species" ? (
                <>{this.species(result)}</>
              ) : null}
              {this.props.page === "starships" ? (
                <>{this.starships(result)}</>
              ) : null}
              {this.props.page === "vehicles" ? (
                <>{this.vehicles(result)}</>
              ) : null}
              <button
                className="details-btn hidden"
                onClick={() => this.close(i)}>
                close
              </button>
            </div>
          );
        })}
      </>
    );
  }
}
