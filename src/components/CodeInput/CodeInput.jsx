import React from "react";
import AutoTabInput from "../AutoInput/AutoInput.jsx";
class CodeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  unitOnChange(index, unit) {
    return this.props.onChange(index, unit);
  }
  render() {
    const styleObj = {
      boxSizing: "border-box",
      border: "1px solid #cdcbcb",
      boxShadow: "none",
      outlineColor: "#1054ff",
      outlineWidth: "4px",
      textAlign: "center",
      marginRight: 10,
      height: 64,
      width: 64
    };
    const lastStyleObj = {
      boxSizing: "border-box",
      border: "1px solid #cdcbcb",
      boxShadow: "none",
      outlineColor: "#1054ff",
      outlineWidth: "2px",
      textAlign: "center",
      height: 64,
      width: 64
    };
    const styleErr = {
      boxSizing: "border-box",
      border: "1px solid #f44236",
      boxShadow: "none",
      outline: "none",
      textAlign: "center",
      marginRight: 10
    };
    const lastStyleErr = {
      boxSizing: "border-box",
      border: "1px solid #f44236",
      boxShadow: "none",
      outline: "none",
      textAlign: "center"
    };
    return (
      <div>
        <div>
          <span>
            <AutoTabInput
              ref="myinput"
              style={this.props.codeBorderStatus ? styleErr : styleObj}
              type="text"
              maxLength={1}
              value={this.props.value[0] ? this.props.value[0] : ""}
              onChange={this.unitOnChange.bind(this, 0)}
              autoFocus
              handlePaste={this.props.handlePaste.bind(this)}
            />
            <AutoTabInput
              style={this.props.codeBorderStatus ? styleErr : styleObj}
              type="text"
              maxLength={1}
              value={this.props.value[1] ? this.props.value[1] : ""}
              onChange={this.unitOnChange.bind(this, 1)}
              handlePaste={this.props.handlePaste.bind(this)}
            />
            <AutoTabInput
              style={this.props.codeBorderStatus ? styleErr : styleObj}
              type="text"
              maxLength={1}
              value={this.props.value[2] ? this.props.value[2] : ""}
              onChange={this.unitOnChange.bind(this, 2)}
              handlePaste={this.props.handlePaste.bind(this)}
            />
            <AutoTabInput
              style={this.props.codeBorderStatus ? styleErr : styleObj}
              type="text"
              maxLength={1}
              value={this.props.value[3] ? this.props.value[3] : ""}
              onChange={this.unitOnChange.bind(this, 3)}
              handlePaste={this.props.handlePaste.bind(this)}
            />
            <AutoTabInput
              style={this.props.codeBorderStatus ? styleErr : styleObj}
              type="text"
              maxLength={1}
              value={this.props.value[4] ? this.props.value[4] : ""}
              onChange={this.unitOnChange.bind(this, 4)}
              handlePaste={this.props.handlePaste.bind(this)}
            />
            <AutoTabInput
              style={this.props.codeBorderStatus ? lastStyleErr : lastStyleObj}
              type="text"
              maxLength={1}
              value={this.props.value[5] ? this.props.value[5] : ""}
              onChange={this.unitOnChange.bind(this, 5)}
              handlePaste={this.props.handlePaste.bind(this)}
            />
          </span>
          {this.props.allDelete ? (
            <div style={{ display: "inline-block" }}>
              <span
                className="icon__dianpuhezi_close"
                style={{ color: "#6b798e", boxSizing: "border-box" }}
                onClick={() => {
                  this.props.resetCode();
                  this.refs.myinput._input.focus();
                }}
              >
                清除
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default CodeInput;
