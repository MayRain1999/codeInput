import React, { PureComponent, PropTypes } from "react";

class AutotabInput extends PureComponent {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    const input = e.target.value;
    if (this.props.onChange) {
      this.props.onChange(input);
    }
    this.handleTab(e);
  }

  handleDelete(e) {
    const BACK_SPACE = 8;
    const isBackSpaceKey = e.keyCode === BACK_SPACE;
    if (isBackSpaceKey && e.target.value.length === 0) {
      let previous = e.target;
      previous = previous.previousElementSibling;
      while (previous) {
        if (previous === null) break;
        if (previous.tagName.toLowerCase() === "input") {
          previous.focus();
          break;
        }
      }
    }
  }

  handlePaste(e) {
    let clipboardData = e.clipboardData || window.clipboardData;
    if (clipboardData) {
      let clipdata = clipboardData.getData("Text");
      return this.props.handlePaste(clipdata);
    }
  }

  handleTab(e) {
    const target = e.target;
    const input = target.value;
    if (input.length >= this.props.maxLength) {
      let next = target;
      next = next.nextElementSibling;
      while (next) {
        if (next === null) break;
        if (next.tagName.toLowerCase() === "input") {
          next.focus();
          break;
        }
      }
    }
  }

  render() {
    return (
      <input
        type={this.props.type}
        name={this.props.name}
        placeholder={this.props.hint}
        maxLength={this.props.maxLength}
        // defaultValue={this.props.value}
        onChange={this.handleChange}
        onKeyDown={this.props.maxLength ? this.handleDelete : null}
        style={this.props.style}
        autoFocus={this.props.autoFocus}
        value={this.props.value}
        ref={c => (this._input = c)}
        onPaste={e => {
          this.handlePaste(e);
        }}
      />
    );
  }
}

export default AutotabInput;
