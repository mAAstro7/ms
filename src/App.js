import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MS from './MoneySaver';
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./store";
import showResults from "./showResults";


class App extends Component {
  render() {
    return (
      <MS/>
    );
  }
}

export default App;
