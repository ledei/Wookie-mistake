import React from "react";

export class RenderData extends React.Component {
  constructor() {
    super();

    this.state = {
      popUp: "hidden",
      title: "",
      episode: "",
      director: "",
      producer: "",
      releaseDate: "",
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
      title: this.props.results[i].title,
      episode: this.props.results[i].episode_id,
      director: this.props.results[i].director,
      producer: this.props.results[i].producer,
      releaseDate: this.props.results[i].release_date,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.props.results.map((result, i) => {
          return (
            <h4 onClick={() => this.showDetails(i)} key={i}>
              {result.title}
            </h4>
          );
        })}
        <div className={this.state.popUp}>
          <div className="pop-up-content">
            <h2>{this.state.title}</h2>
            <p>Episode: {this.state.episode}</p>
            <p>Director: {this.state.director}</p>
            <p>Producer: {this.state.producer}</p>
            <p>Release date: {this.state.releaseDate}</p>
            <button onClick={() => this.close()}>close</button>
          </div>
        </div>
      </div>
    );
  }
}
