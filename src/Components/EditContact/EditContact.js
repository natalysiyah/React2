import React, { Fragment } from "react";

class EditContact extends React.Component {
  state = {
    name: this.props.contactForEdit.name,
    description: this.props.contactForEdit.description,
    avatar: this.props.contactForEdit.avatar
  };

  GetName = event => {
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

  onSubmit = e => {
    e.preventDefault();
    const { name, description, avatar } = this.state;
    console.log(name, description, avatar);
  };

  render() {
    return (
      <Fragment>
        <h2>Edit contact</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Name</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder={this.state.name}
              onChange={this.GetName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Description</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder={this.state.description}
              onChange={this.GetDesc}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Avatar</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder={this.state.avatar}
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
            <label className="custom-control-label" htmlFor="customRadio1">
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
            <label className="custom-control-label" htmlFor="customRadio2">
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

export default EditContact;
