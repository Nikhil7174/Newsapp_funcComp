import React, { Component } from "react";
import NavBar from "./assets/NavBar";
import News from "./assets/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  pagesize = 5;
  apiKey = import.meta.env.VITE_REACT_NEWS_APIKEY;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <LoadingBar
            height=""
            color="blue"
            progress={this.state.progress}
            apiKey={this.apiKey}
            // onLoaderFinished={() => setProgress(0)}
          />
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  country="in"
                  pagesize="5"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  country="in"
                  pagesize="5"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  country="in"
                  pagesize="5"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  country="in"
                  pagesize="5"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  country="in"
                  pagesize="5"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  country="in"
                  pagesize="5"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  country="in"
                  pagesize="5"
                  category="technology"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
