import React from "react";
import { connect } from "react-redux";
import { addHistoryList } from "./action";
import "bootstrap-css-only";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
      show: false
    };
  }
  handleInputChange = (e) => {
    this.setState({ input: e.target.value }, () =>
      console.log(this.state.input)
    );
  };

  handleModal = () => {
    this.setState({ show: !this.state.show });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addHistoryList({
      value: this.state.input,
      date: new Date().toISOString().slice(0, 10)
    });
    this.props.history.push({
      pathname: "/print",
      input: this.state.input
    });
  };
  render() {
    console.log(this.props);
    return (
      <>
        <div style={{ marginTop: "10%" }}>
          <h2>Enter Number</h2>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group flex-container">
              <input
                type="number"
                style={{ width: "50%" }}
                className="form-control"
                min="1"
                max="10"
                pattern="^-?[0-9]\d*\.?\d*$"
                onChange={this.handleInputChange}
              />
              <div className="float-right">
                <b
                  onClick={() => {
                    this.props.history.push("./history");
                  }}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                >
                  View History
                </b>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = () => (state) => {
  console.log("pnk", state.addHistoryList);
  return {
    historyList: state.addHistoryList
  };
};

export default connect(mapStateToProps, { addHistoryList })(Home);
