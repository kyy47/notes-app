import React, { Component } from "react";
import Header from "./header/Header";
import CreateNote from "./createnote/CreateNote";
import ListNote from "./list/ListNote";
import { getInitialData } from "../utils";
export class NotesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchkey: "",
    };
  }

  searchKeyHandler = (e) => {
    this.setState({
      searchkey: e.target.value,
    });
  };
  addNote = (note) => {
    this.setState((prevState) => ({
      notes: [...prevState.notes, note],
    }));
  };
  removeNote = (id) => {
    this.setState({
      notes: this.state.notes.filter((item) => id !== item.id),
    });
  };
  moveFromArchived = (id) => {
    this.setState({
      notes: this.state.notes.map((item) =>
        id === item.id ? { ...item, archived: false } : item
      ),
    });
  };
  moveToArchived = (id) => {
    this.setState({
      notes: this.state.notes.map((item) =>
        id === item.id ? { ...item, archived: true } : item
      ),
    });
  };
  render() {
    return (
      <div className="container">
        <Header
          onSearch={this.searchKeyHandler}
          keyword={this.state.searchkey}
        />
        <CreateNote onAddNote={this.addNote} />

        <ListNote
          title="Notes Actived"
          notes={this.state.notes.filter((note) =>
            this.state.searchkey.trim()
              ? note.archived === false &&
                note.title
                  .toLowerCase()
                  .includes(this.state.searchkey.toLowerCase())
              : note.archived === false
          )}
          onRemove={this.removeNote}
          onMoveFromArchived={this.moveFromArchived}
          onMoveToArchived={this.moveToArchived}
        />
        <ListNote
          title="Notes Archived"
          notes={this.state.notes.filter((note) =>
            this.state.searchkey.trim()
              ? note.archived === true &&
                note.title
                  .toLowerCase()
                  .includes(this.state.searchkey.toLowerCase())
              : note.archived === true
          )}
          onRemove={this.removeNote}
          onMoveFromArchived={this.moveFromArchived}
          onMoveToArchived={this.moveToArchived}
        />
      </div>
    );
  }
}

export default NotesApp;
