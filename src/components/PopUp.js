import React from "react";

export class PopUp extends React.Component {
  close() {
    this.props.setTogglePopUp("hidden");
  }

  people() {
    return (
      <>
        <div className={this.props.togglePopUp}>
          <div className="pop-up-content">
            <h2>{this.props.content.name}</h2>
            <p>Birth year: {this.props.content.birth_year}</p>
            <p>Gender: {this.props.content.gender}</p>
            <p>Height: {this.props.content.height}cm</p>
            <p>Hair color: {this.props.content.hair_color}</p>
            <p>Eye color: {this.props.content.eye_color}</p>

            <div>
              <h2>{this.props.homeWorld.name}</h2>
              <p>Rotation period: {this.props.homeWorld.rotation_period}h</p>
              <p>Orbital period: {this.props.homeWorld.orbital_period}days</p>
              <p>Climate: {this.props.homeWorld.climate}</p>
              <p>Gravity: {this.props.homeWorld.gravity}</p>
              <p>Population: {this.props.homeWorld.population}</p>
              <p>Diameter:{this.props.homeWorld.diameter}</p>
              <p>Terrain: {this.props.homeWorld.terrain}</p>
            </div>
            <button onClick={() => this.close()}>close</button>
          </div>
        </div>
      </>
    );
  }

  films() {
    return (
      <>
        <div className={this.props.togglePopUp}>
          <div className="pop-up-content">
            <h2>{this.props.content.title}</h2>
            <p>Episode: {this.props.content.episode_id}</p>
            <p>Director: {this.props.content.director}</p>
            <p>Producer: {this.props.content.producer}</p>
            <p>Release date: {this.props.content.release_date}</p>
            <button onClick={() => this.close()}>close</button>
          </div>
        </div>
      </>
    );
  }

  planets() {
    return (
      <>
        <div className={this.props.togglePopUp}>
          <div className="pop-up-content">
            <h2>{this.props.content.name}</h2>
            <p>Rotation period: {this.props.content.rotation_period}h</p>
            <p>Orbital period: {this.props.content.orbital_period}days</p>
            <p>Climate: {this.props.content.climate}</p>
            <p>Gravity: {this.props.content.gravity}</p>
            <p>Population: {this.props.content.population}</p>
            <p>Diameter:{this.props.content.diameter}</p>
            <p>Terrain: {this.props.content.terrain}</p>
            <button onClick={() => this.close()}>close</button>
          </div>
        </div>
      </>
    );
  }

  species() {
    return (
      <>
        <div className={this.props.togglePopUp}>
          <div className="pop-up-content">
            <h2>{this.props.content.name}</h2>
            <p>classification: {this.props.content.classification}</p>
            <p>Average height: {this.props.content.average_height} cm</p>
            <p>Average lifespan: {this.props.content.average_lifespan}</p>
            <p>language: {this.props.content.language}</p>
            <div>
              <h2>Home world:{this.props.homeWorld.name}</h2>
              <p>Rotation period: {this.props.homeWorld.rotation_period}h</p>
              <p>Orbital period: {this.props.homeWorld.orbital_period}days</p>
              <p>Climate: {this.props.homeWorld.climate}</p>
              <p>Gravity: {this.props.homeWorld.gravity}</p>
              <p>Population: {this.props.homeWorld.population}</p>
              <p>Diameter:{this.props.homeWorld.diameter}</p>
              <p>Terrain: {this.props.homeWorld.terrain}</p>
            </div>
            <button onClick={() => this.close()}>close</button>
          </div>
        </div>
      </>
    );
  }

  starships() {
    return (
      <>
        <div className={this.props.togglePopUp}>
          <div className="pop-up-content">
            <h2>{this.props.content.name}</h2>
            <p>Model: {this.props.content.model}</p>
            <p>Manufacturer: {this.props.content.manufacturer}</p>
            <p>
              Max atmosphering speed:
              {this.props.content.max_atmosphering_speed} km/h
            </p>
            <p>Crew: {this.props.content.crew}</p>
            <p>Passengers:{this.props.content.passengers}</p>
            <p>starship class: {this.props.content.starship_class}</p>
            <p>Cost in credits: {this.props.content.cost_in_credits}</p>
            <button onClick={() => this.close()}>close</button>
          </div>
        </div>
      </>
    );
  }

  vehicles() {
    return (
      <>
        <div className={this.props.togglePopUp}>
          <div className="pop-up-content">
            <h2>{this.props.content.name}</h2>
            <p>Model: {this.props.content.model}</p>
            <p>Manufacturer: {this.props.content.manufacturer}</p>
            <p>
              Max atmosphering speed:
              {this.props.content.max_atmosphering_speed} km/h
            </p>
            <p>Crew: {this.props.content.crew}</p>
            <p>Passengers:{this.props.content.passengers}</p>
            <p>starship class: {this.props.content.starship_class}</p>
            <p>Cost in credits: {this.props.content.cost_in_credits}</p>
            <button onClick={() => this.close()}>close</button>
          </div>
        </div>
      </>
    );
  }

  render() {
    return (
      <>
        {this.props.page === "people" ? <>{this.people()}</> : null}
        {this.props.page === "films" ? <>{this.films()}</> : null}
        {this.props.page === "planets" ? <>{this.planets()}</> : null}
        {this.props.page === "species" ? <>{this.species()}</> : null}
        {this.props.page === "starships" ? <>{this.starships()}</> : null}
        {this.props.page === "vehicles" ? <>{this.vehicles()}</> : null}
      </>
    );
  }
}
