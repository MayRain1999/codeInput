import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CodeInput from "./components/CodeInput/CodeInput.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorCode: false,
      code: ["", "", "", "", "", ""],
      allDelete: false,
      codeBorderStatus: false
    };
  }

  submit = codeString => {
    console.log(codeString);
  };

  // 重置输入框
  resetCode = () => {
    this.setState({
      code: ["", "", "", "", "", ""],
      allDelete: false,
      codeBorderStatus: false,
      errorCode: false
    });
  };

  // 粘贴验证码
  handlePaste = value => {
    let regTest = /^\d{6}$/;
    let codeString = value;
    if (value && regTest.test(value)) {
      let arr = value.split("");
      this.setState({ code: arr, allDelete: codeString.length >= 1 });
      // 匹配输入和校验
      if (codeString.length === 6 && regTest.test(codeString)) {
        return this.submit(codeString);
      }
    }
  };
  //校验输入和提交
  handleChange = (index, unit) => {
    let { code } = this.state;
    let codeString = "";
    let reg = /^[A-Za-z0-9]/;
    code[index] = unit;
    for (let item of code) {
      codeString += String(item);
    }
    this.setState({ code: code, allDelete: codeString.length >= 1 });
    if (codeString.length < 6) {
      this.setState({
        codeBorderStatus: false,
        errorCode: false
      });
    }
    if (codeString.length === 6 && reg.test(codeString)) {
      return this.submit(codeString);
    }
  };
  render() {
    const { errorCode, allDelete, codeBorderStatus, code } = this.state;
    return (
      <div
        className="App"
        style={{
          margin: "auto",
          marginTop: 200
        }}
      >
        <CodeInput
          hasError={!!errorCode}
          value={code}
          onChange={this.handleChange}
          resetCode={this.resetCode}
          allDelete={allDelete}
          codeBorderStatus={codeBorderStatus}
          handlePaste={this.handlePaste}
        />
      </div>
    );
  }
}

export default App;
