import React, { Component } from "react";
import { connect } from "react-redux";

class Number extends Component {
    render() {
        console.log(this.props.amount);
        console.log(this.props.amount.number);
        return <div>{this.props.amount.number}</div>;
    }
}
// lấy dữ liệu từ store trở thành props
let mapStateToProps = (state) => {
    return {
        amount: state.numberReducer,
    };
};

export default connect(mapStateToProps)(Number);
