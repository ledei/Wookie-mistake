import React from "react";

export class RenderData extends React.Component {
  constructor() {
    super();

    this.state = {
      popUp: "hidden",
      name: "",
      classification: "",
      averageHeight: "",
      averageLifespan: "",
      language: "",
      homeWorld: "",
    };
  }

  close() {
    this.setState({ popUp: "hidden" });
  }

  show() {
    this.setState({ popUp: "pop-up" });
  }

  async fetchHomeWorld(url) {
    fetch(url).then((resp) =>
      resp.json().then((data) => {
        this.setState({ homeWorld: data.name });
      })
    );
  }

  showDetails(i) {
    this.fetchHomeWorld(this.props.results[i].homeworld);
    this.show();

    this.setState({
      name: this.props.results[i].name,
      classification: this.props.results[i].classification,
      averageHeight: this.props.results[i].average_height,
      averageLifespan: this.props.results[i].average_lifespan,
      language: this.props.results[i].language,
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
            <p>classification: {this.state.classification}</p>
            <p>Average height: {this.state.averageHeight} cm</p>
            <p>Average lifespan: {this.state.averageLifespan}</p>
            <p>Home world: {this.state.homeWorld}</p>
            <button onClick={() => this.close()}>close</button>
          </div>
        </div>
      </div>
    );
  }
}
