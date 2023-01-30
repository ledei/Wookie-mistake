import React from "react";

export class RenderData extends React.Component {
  togglePopUp(content) {
    this.props.setContent(content);
    this.props.setTogglePopUp("pop-up");
    if (this.props.fetchHomeChecker === "fetch") {
      this.fetchHomeWorld(content.homeworld);
    }
  }

  async fetchHomeWorld(url) {
    fetch(url).then((resp) =>
      resp.json().then((result) => {
        this.props.setHomeWorld(result);
      })
    );
  }

  render() {
    return (
      <>
        {this.props.results.map((result, i) => {
          return (
            <h4 onClick={() => this.togglePopUp(result)} key={i}>
              {this.props.titleChecker === "title" ? result.title : result.name}
            </h4>
          );
        })}
      </>
    );
  }
}
