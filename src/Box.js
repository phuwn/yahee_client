import React, { Component } from "react";

class ChatBox extends Component {
  state = {
    text: "",
    log: [],
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      this.props.sendMessage(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    const { text } = this.state;
    return (
      <form id="form">
        <input
          type="text"
          id="msg"
          size="64"
          value={text}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </form>
    );
  }
}

export default ChatBox;
