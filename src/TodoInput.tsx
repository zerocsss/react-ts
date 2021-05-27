import React, { Component } from "react";

interface InputSetting {
  placeholder: string;
  maxLength: number;
}

interface State {}

export class TodoInputProps {
  private _handleSubmit: ((value: string) => void) | undefined;
  public inputSetting: InputSetting = {
    maxLength: 20,
    placeholder: "请输入todo",
  };
}

class TodoInput extends Component<TodoInputProps, State> {
  public static defaultProps = new TodoInputProps();
}

export default TodoInput;
