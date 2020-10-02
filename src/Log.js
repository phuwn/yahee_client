import React, { Component } from "react";

class ChatLog extends Component {
  render() {
    return <div id="log">{this.props.log}</div>;
  }
}

export default ChatLog;
