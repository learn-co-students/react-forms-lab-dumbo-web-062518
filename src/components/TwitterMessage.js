import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      charsLeft: 0
    };
  }

  handleOnChange = (e) => {
    const textInput = e.target.value
    // console.log(textInput)
    this.setState({
      value: textInput,
      charsUsed: (this.props.maxChars - textInput.length)
    })
    console.log(this.state.value)
  }

  // prepTwitter = (e) => {
  //   const textInput = e.target.value
  //   this.setState({charsLeft: this.props.maxChars - textInput.length})
  // }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleOnChange}/><br></br>
        <label>Characters Remaining</label>
        <p>{this.state.charsUsed}/{this.props.maxChars}</p>
      </div>
    );
  }
}
// onFocus={this.prepTwitter}

export default TwitterMessage;
