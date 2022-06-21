import React, { PureComponent } from "react";
import Button from "part:@sanity/components/buttons/default";

class ClickCounter extends PureComponent {
  constructor() {
    super();
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicks: clicks++ });
  }

  render() {
    return (
      <div>
        Number of clicks: {this.state.clicks}
        <Button onClick={this.handleClick}>Click me!</Button>
      </div>
    );
  }
}

export default ClickCounter;
