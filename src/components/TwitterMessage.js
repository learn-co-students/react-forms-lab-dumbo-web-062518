import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      chars: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      chars: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.chars}
          onChange={(e) => this.handleChange(e)}
        />
        {this.props.maxChars - this.state.chars.length}
      </div>
    );
  }
}

export default TwitterMessage;
