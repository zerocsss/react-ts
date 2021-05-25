import React, { Component } from "react";

type Props = {
  handleSubmit: (value: string) => void;
};

interface State {
  itemText: string;
}

class TodoList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      itemText: "",
    };
  }

  private inputRef = React.createRef<HTMLInputElement>();

  private updateValue(value: string) {
    this.setState({ itemText: value });
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}></form>
        <input
          ref={this.inputRef}
          className="edit"
          value={this.state.itemText}
        />
      </div>
    );
  }
}

export default TodoList;
