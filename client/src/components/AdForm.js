import React from "react";

export default class AdForm extends React.Component {
  render() {
    return (
      <form className={"AdForm"} onSubmit={this.props.onSubmit}>
        <label htmlFor="title">New Ad:</label>
        <input
          name="title"
          value={this.props.title}
          onChange={this.props.onChange}
          className={"AdForm_input"}
        />
        <label className="DescriptionLabel" htmlFor="description">
          Description:
        </label>
        <br />
        <textarea
          name="description"
          value={this.props.description}
          onChange={this.props.onChange}
          className={"EventForm__textarea"}
        />
        <br />
        <label htmlFor="price">Price:</label>
        <input
          name="price"
          value={this.props.price}
          onChange={this.props.onChange}
          className={"AdForm_input"}
        />
        <br />
        <label htmlFor="email">email:</label>
        <br />
        <textarea
          name="email"
          value={this.props.email}
          onChange={this.props.onChange}
          className={"AdForm_textarea"}
        />
        <br />
        <label htmlFor="phone">phone:</label>
        <br />
        <textarea
          name="phone"
          value={this.props.phone}
          onChange={this.props.onChange}
          className={"AdForm_textarea"}
        />
        <br />
        <button
          type="submit"
          className={"AdForm_submitButton"}
          onSubmit={this.props.onSubmit}
        >
          Add
        </button>
      </form>
    );
  }
}
