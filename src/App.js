import React, { Component } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import ChatBox from "./Box.js";
import ChatLog from "./Log.js";

const conn = new W3CWebSocket("ws://127.0.0.1:8080/ws");

class App extends Component {
  state = {
    log: [],
  };

  appendLog = (message) => {
    this.setState({ log: [...this.state.log, <p>{message}</p>] });
  };

  componentWillMount() {
    conn.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    conn.onmessage = (e) => {
      console.log("new", this.state.log);
      var messages = e.data.split("\n");
      for (var i = 0; i < messages.length; i++) {
        this.appendLog(messages[i]);
      }
    };
    conn.onclose = (e) => {
      alert("Connection closed.");
    };
  }

  sendMessage = (message) => {
    if (!conn) {
      console.log("invalid conn");
      return;
    }
    conn.send(message);
  };

  render() {
    if (!window["WebSocket"]) {
      return <b>Your browser does not support WebSockets.</b>;
    }
    return (
      <div className="container">
        <ChatLog log={this.state.log} />
        <ChatBox sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default App;
