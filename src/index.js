import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from './App';

const rootEl = document.getElementById("root");

ReactDOM.render(

  <Provider store={store}>
    <div style={{ padding: 15 }} className="save-money">
      <h2 className="skhole-saves-money" id="left-h2">Kustannussäästö laskuri</h2>
      <h2 className="skhole-saves-money" id="right-h2">Säästöt</h2>
      <App/>    
    </div>
  </Provider>,
  rootEl
);
