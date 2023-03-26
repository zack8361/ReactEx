import React, { Component } from "react";
class MainHeader extends Component {
  constructor() {
    super();
    this.cas = true;
  }
  render() {
    return <h1>Hello, {this.cas ? "카" : "노맛"}</h1>;
  }
}
// es6 방식의 export 방식.
export default MainHeader;
