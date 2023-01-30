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
            <p>Home world: {this.props.homeWorld.name}</p>
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

  render() {
    return (
      <>
        {this.props.page === "people" ? <>{this.people()}</> : null}
        {this.props.page === "films" ? <>{this.films()}</> : null}
      </>
    );
  }
}
