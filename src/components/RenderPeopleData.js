import React from "react";

export class RenderData extends React.Component {
  constructor() {
    super();

    this.state = {
      popUp: "hidden",
      name: "",
      birthYear: "",
      gender: "",
      height: "",
      hairColor: "",
      eyeColor: "",
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
    this.show();
    this.fetchHomeWorld(this.props.results[i].homeworld);

    this.setState({
      name: this.props.results[i].name,
      birthYear: this.props.results[i].birth_year,
      gender: this.props.results[i].gender,
      height: this.props.results[i].height,
      hairColor: this.props.results[i].hair_color,
      eyeColor: this.props.results[i].eye_color,
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
            <p>Birth year: {this.state.birthYear}</p>
            <p>Gender: {this.state.gender}</p>
            <p>Height: {this.state.height}cm</p>
            <p>Hair color: {this.state.hairColor}</p>
            <p>Eye color: {this.state.eyeColor}</p>
            <p>Home world: {this.state.homeWorld}</p>
            <button onClick={() => this.close()}>close</button>
          </div>
        </div>
      </div>
    );
  }
}
