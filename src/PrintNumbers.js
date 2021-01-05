import React from "react";
import { Link } from "react-router-dom";
class PrintNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  static getDerivedStateFromProps(props) {
    let data = "";
    for (let i = 1; i <= props.location.input; i++) {
      if (i == props.location.input) {
        data += i;
      } else {
        data += i + ",";
      }
    }
    return {
      data: data
    };
  }

  render() {
    return (
      <>
        <div style={{ marginTop: "10%" }}>
          <div>
            <Link to={"/"}>
              <button type="button" class="btn btn-outline-primary ">
                Go Back
              </button>
            </Link>
          </div>
          <div style={{ marginTop: "40px" }}>
            <h1>
              <b>{this.state.data}</b>
            </h1>
          </div>
        </div>
      </>
    );
  }
}

export default PrintNumber;
