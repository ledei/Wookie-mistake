import React from "react";

export class RenderData extends React.Component {
  togglePopUp(content) {
    this.props.setContent(content);
    this.props.setTogglePopUp("pop-up");
    this.fetchHomeWorld(content.homeworld);
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
              {result.name}
            </h4>
          );
        })}
      </>
    );
  }
}
