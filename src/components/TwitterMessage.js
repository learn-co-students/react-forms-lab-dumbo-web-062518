import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      charsLeft: this.props.maxChars
    };
  }

  handleInput = (event) => {
    this.setState({ text: event.target.value })
    this.setState(prevState => {
      return { charsLeft: prevState.charsLeft - 1 }
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.text} onChange={this.handleInput} />
        {this.state.charsLeft}
      </div>
    );
  }
}

export default TwitterMessage;
