import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chars: ''
    };
  }

  handleChange = event => {
    // let currentChars = this.state.chars
    this.setState({
      chars: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleChange(event)} value={this.state.chars}/>
        {this.props.maxChars - this.state.chars.length}
      </div>
    );
  }
}

export default TwitterMessage;
