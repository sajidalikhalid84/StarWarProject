import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import App from "./App";

it("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="App"
    >
      <header
        className="App-header"
      >
        <img
          alt="logo"
          className="App-logo"
          src="Star_Wars_Logo.svg.png"
        />
        <h1
          className="App-title"
        >
          Welcome to the prototype interactive Test
        </h1>
      </header>
      <div
        className="App-Theme"
      >
        <h2>
          Which of all Star Wars movies has the longest opening crawl ?
        </h2>
        <h3>
          
        </h3>
        <h2>
          What character (person) appeared in most of the Star Wars films? 
        </h2>
        <h3>
          
        </h3>
        <div
          className="App-Theme"
        >
          <h2>
            What species appeared in the most  number of Star Wars films? 
          </h2>
        </div>
        <div
          className="App-Theme"
        >
          <h2>
            What planet in Star Wars universe provided largest number of vehicle pilots?
          </h2>
        </div>
      </div>
    </div>
  `);
});
