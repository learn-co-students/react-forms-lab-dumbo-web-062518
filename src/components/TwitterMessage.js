import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chars:''
    };
  }

  handleChange = (event) =>{
    // console.log(event.target.value)
    this.setState({
      chars: event.target.value
    })
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          value={this.state.chars}
          onChange={(event) => this.handleChange(event)}
        />
        remaining characters: {this.props.maxChars - this.state.chars.length}
      </div>
    );
  }
}

export default TwitterMessage;
