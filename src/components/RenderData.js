import React from "react";

export class RenderData extends React.Component {
  handleClick(i) {
    console.log(this.props.results[i].name);
    console.log(this.props.results[i].terrain);

    return (
      <>
        <h3>{this.props.results[i].name}</h3>
        <p>{this.props.results[i].terrain}</p>
      </>
    );
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.props.results.map((result, i) => {
          return (
            <h4 onClick={() => this.handleClick(i)} key={i}>
              {result.name}
            </h4>
          );
        })}
      </div>
    );
  }
}
