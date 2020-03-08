import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { success } = this.props;
    return (
      <div data-test="component-input">
        {!success && (
          <form className="form-inline">
            <input
              data-test="input-box"
              className="mb-2 mx-sm-3"
              type="text"
              placeholder="enter guess"
            />
            <button data-test="submit-button" className="btn btn-primary mb-2">
              Submit
            </button>
          </form>
        )}
        <button />
      </div>
    );
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
