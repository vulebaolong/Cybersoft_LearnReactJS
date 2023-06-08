import React, { Component } from "react";
import { connect } from "react-redux";

class Number extends Component {
    render() {
        const { number } = this.props;
        return <div>{number}</div>;
    }
}
// lấy dữ liệu từ store trở thành props
let mapStateToProps = (state) => {
    return {
        number: state.DemoMiniRedux.number,
    };
};

export default connect(mapStateToProps)(Number);
