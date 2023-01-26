import React from "react";

export class RenderData extends React.Component {
  constructor() {
    super();

    this.state = {
      popUp: "hidden",
      name: "",
      model: "",
      manufacturer: "",
      maxAtmospheringSpeed: "",
      crew: "",
      passengers: "",
      starshipClass: "",
      costInCredits: "",
    };
  }

  close() {
    this.setState({ popUp: "hidden" });
  }

  show() {
    this.setState({ popUp: "pop-up" });
  }

  showDetails(i) {
    this.show();

    this.setState({
      name: this.props.results[i].name,
      model: this.props.results[i].model,
      manufacturer: this.props.results[i].manufacturer,
      maxAtmospheringSpeed: this.props.results[i].max_atmosphering_speed,
      crew: this.props.results[i].crew,
      passengers: this.props.results[i].passengers,
      starshipClass: this.props.results[i].starship_class,
      costInCredits: this.props.results[i].cost_in_credits,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.props.results.map((result, i) => {
          return (
            <h4 onClick={() => this.showDetails(i)} key={i}>
              {result.name}
            </h4>
          );
        })}
        <div className={this.state.popUp}>
          <div className="pop-up-content">
            <h2>{this.state.name}</h2>
            <p>Model: {this.state.model}</p>
            <p>Manufacturer: {this.state.manufacturer}</p>
            <p>
              Max atmosphering speed: {this.state.maxAtmospheringSpeed} km/h
            </p>
            <p>Crew: {this.state.crew}</p>
            <p>Passengers:{this.state.passengers}</p>
            <p>starship class: {this.state.starshipClass}</p>
            <p>Cost in credits: {this.state.costInCredits}</p>

            <button onClick={() => this.close()}>close</button>
          </div>
        </div>
      </div>
    );
  }
}
