import React from "react";
import { render } from "react-dom";
import { makeData } from "./Utils";
import MainTable from './MainTable'
import Header from "./Header"
import Footer from "./Footer"



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    return (
      <div>
        <Header />
        <MainTable />
        <Footer />
      </div>
    )
  }
}

render(<App />, document.getElementById("root"));
