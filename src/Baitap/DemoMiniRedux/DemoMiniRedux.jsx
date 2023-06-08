import React, { Component } from "react";
import { connect } from "react-redux";
import { TANG } from "./redux/constant/numberConstant";
import Number from "./Number/Number";

class DemoMiniRedux extends Component {
    render() {
        const { number, handleChange } = this.props;
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
                <Number />
            </div>
        );
    }
}

// lấy dữ liệu từ store trở thành props
let mapStateToProps = (state) => {
    return {
        number: state.DemoMiniRedux.number,
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
