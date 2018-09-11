import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      charsLeft: props.maxChars
    };
  }

  handleChange = (e) => {
    var len = e.target.value.length
    var newState = this.state.charsLeft - len
    this.setState({message: e.target.value, charsLeft: newState})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name='message' value={this.state.message} />
        <p>{this.state.charsLeft} chars left</p>

      </div>
    );
  }
}

export default TwitterMessage;
