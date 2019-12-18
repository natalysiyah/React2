import React, { Fragment } from "react";
import "./AddNewContact.css";

class AddNewContact extends React.Component {
  state = {
    name: "",
    description: "",
    avatar: ""
  };
  GetName = event => {
    console.log(event.target.value);
    this.setState({
      name: event.target.value
    });
  };
  GetAvatar = event => {
    this.setState({
      avatar: event.target.value
    });
  };
  GetDesc = event => {
    this.setState({
      description: event.target.value
    });
  };
  GetUserData = () => {};
  OnSubmit = e => {
    e.preventDefault();
    console.log("onSubmit");
    const { name, description, avatar } = this.state;
    this.props.onEditContact(name, description, avatar);
  };
  render() {
    return (
      <Fragment>
        <form onSubmit={this.OnSubmit}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Name</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Name"
              onChange={this.GetName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Description</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Description"
              onChange={this.GetDesc}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Avatar</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Avatar"
              onChange={this.GetAvatar}
            />
          </div>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              className="custom-control-input"
            />
            <label className="custom-control-label" for="customRadio1">
              Woman
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio2"
              name="customRadio"
              className="custom-control-input"
            />
            <label className="custom-control-label" for="customRadio2">
              Man
            </label>
          </div>
          <button type="submit" className="btn btn-success">
            Add
          </button>
        </form>
      </Fragment>
    );
  }
}
export default AddNewContact;
