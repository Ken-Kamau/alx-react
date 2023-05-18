import logo from "./holberton-logo.jpg";
import "./App.css";
import { getFooterCopy, getFullYear } from "./utils.js";
import React, { useRef } from "react";

function App() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const emailFocus = () => {
    emailRef.current.focus();
  };
  const passwordFocus = () => {
    passwordRef.current.focus();
  };
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label for="email" onClick={emailFocus}>
            Email:{" "}
          </label>
          <input type="email" name="email" ref={emailRef}></input>
          <label for="password" onClick={passwordFocus}>
            Password:{" "}
          </label>
          <input type="password" name="password" ref={passwordRef}></input>
          <button id="okButton">OK</button>
        </form>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
    </div>
  );
}

export default App;
