import React, { Component } from "react";

import InputNote from "./InputNote";
import TextAreaNote from "./TextAreaNote";
import ButtonCreate from "./ButtonCreate";
import TitleCreateNote from "./TitleCreateNote";

export class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.maxTitle = 50;
    this.state = {
      titleNote: "",
      descNote: "",
      keyCode: "",
    };
  }
  changeKeyCode = (e) => {
    this.setState({
      keyCode: e.key,
    });
  };
  changeTitleNote = (e) => {
    if (
      this.state.titleNote.length < 50 ||
      this.state.keyCode === "Backspace"
    ) {
      this.setState({
        titleNote: e.target.value,
      });
    }
  };
  changeDescNote = (e) => {
    this.setState({
      descNote: e.target.value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    if (
      this.state.titleNote.trim() === "" ||
      this.state.descNote.trim() === ""
    ) {
      return alert("selesaikan inputanmu bro");
    }
    this.props.onAddNote({
      id: +new Date(),
      title: this.state.titleNote,
      body: this.state.descNote,
      archived: false,
      createdAt: new Date().toISOString(),
    });
    this.setState({
      titleNote: "",
      descNote: "",
    });
  };
  render() {
    return (
      <form className="create-note" onSubmit={this.submitHandler}>
        <TitleCreateNote />
        <InputNote
          titleNote={this.state.titleNote}
          onChangeTitle={this.changeTitleNote}
          restTitle={this.maxTitle - this.state.titleNote.trim().length}
          onChangekey={this.changeKeyCode}
        />
        <TextAreaNote
          descNote={this.state.descNote}
          onChangeDesc={this.changeDescNote}
        />
        <ButtonCreate />
      </form>
    );
  }
}

export default CreateNote;
