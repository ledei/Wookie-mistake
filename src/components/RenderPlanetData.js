import React from "react";

export class RenderData extends React.Component {
  constructor() {
    super();

    this.state = {
      popUp: "hidden",
      name: "",
      population: "",
      diameter: "",
      terrain: "",
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
      population: this.props.results[i].population,
      diameter: this.props.results[i].diameter,
      terrain: this.props.results[i].terrain,
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
            <p>Population: {this.state.population}</p>
            <p>Diameter:{this.state.diameter}</p>
            <p>Terrain: {this.state.terrain}</p>
            <button onClick={() => this.close()}>close</button>
          </div>
        </div>
      </div>
    );
  }
}
