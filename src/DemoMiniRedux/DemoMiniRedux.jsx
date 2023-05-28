import React, { Component } from "react";
import { connect } from "react-redux";
import { TANG } from "./redux/constant/numberConstant";

class DemoMiniRedux extends Component {
    render() {
        console.log(this.props);
        const { amount, handleChange } = this.props;
        const { number } = amount;
        return (
            <div className="text-center">
                <button
                    onClick={() => {
                        handleChange(-1);
                    }}
                    className="btn btn-success"
                >
                    -
                </button>
                <strong>{number}</strong>
                <button
                    onClick={() => {
                        handleChange(1);
                    }}
                    className="btn btn-success"
                >
                    +
                </button>
            </div>
        );
    }
}

// lấy dữ liệu từ store trở thành props
let mapStateToProps = (state) => {
    console.log(state);
    return {
        amount: state.numberReducer,
    };
};

// viết hàm handle => đẩy data lên
let mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (value) => {
            dispatch({
                type: TANG,
                payload: value,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoMiniRedux);
