import React, { Component } from "react";

class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  handleButtonClick = event => {
    event.preventDefault();
    this.props.handleButtonClick(this.state.input);
    this.setState({
      input: ""
    });
  };

  handleButtonDelete = event => {
    event.preventDefault();
    this.props.handleButtonDelete(event.target.id);
    console.log(event.target.id);
  };

  handleEditButton = event => {
    event.preventDefault();
    this.props.handleEditButton(event.target.name);
    console.log(event.target.name);
  };

  render() {
    return (
      <div className="form-group">
      <center>
        <form>
          <h2>To-Do List App</h2>
          <div className="user-input">
          <input
          className="form-control input-field"
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button className="btn btn-success" onClick={this.handleButtonClick}>
            Add
          </button>
          </div>
          <ul className="list-group">
            {this.props.items.map(item => {
              return (
                <li key={item} className="list-group-item li-item">
                    {`${item}`}
                    <div>
                  <button className="btn btn-warning" name={item} onClick={this.handleEditButton}>
                    Edit
                  </button>
                  <button className="btn btn-danger" id={item} onClick={this.handleButtonDelete}>
                    Delete
                  </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </form>
        </center>
      </div>
    );
  }
}

export default HomeComponent;
