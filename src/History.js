import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "bootstrap-css-only";

class History extends React.Component {
  render() {
    return (
      <>
        <div style={{ marginTop: "20px" }}>
          <div>
            <Link to={"/"}>
              <button
                type="button"
                style={{ marginLeft: "10px" }}
                class="btn btn-outline-primary float-left"
              >
                Go Back
              </button>
            </Link>
          </div>
          <div>
            <table
              className="table table-bordered"
              style={{ width: "80%", marginLeft: "150px" }}
            >
              <thead>
                <tr>
                  <th>Value</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {this.props.historyList.length > 0 &&
                  this.props.historyList.map((item) => {
                    return (
                      <>
                        <tr>
                          <td>{item.value}</td>
                          <td>{item.date}</td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
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

export default connect(mapStateToProps)(History);
