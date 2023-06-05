import React, { Component } from "react";
import { connect } from "react-redux";

class SelectChair extends Component {
    render() {
        const { selectChair, deleteChair } = this.props;
        let priceAll = 0;
        return (
            <div style={{ height: "100%" }} className="d-flex flex-column">
                <h2 className="text-center my-5 ">Danh sách ghế bạn chọn</h2>
                <div className="d-flex justify-content-start align-items-center gap-2">
                    <div className="gheDaDat"></div>
                    <span className="fw-bolder">Ghế đã đặt</span>
                </div>
                <div className="d-flex justify-content-start align-items-center gap-2 my-2">
                    <div className="gheDangChon"></div>
                    <span className="fw-bolder">Ghế đang chọn</span>
                </div>
                <div className="d-flex justify-content-start align-items-center gap-2">
                    <div className="gheChuaDat"></div>
                    <span className="fw-bolder">Ghế chưa đặt</span>
                </div>
                <div className="" style={{ height: "560px", overflowY: "auto" }}>
                    <div className="border border-white rounded mt-4 p-2">
                        <table className="table border-white table-bordered text-white m-0">
                            <thead>
                                <tr>
                                    <th scope="col">Số ghế</th>
                                    <th scope="col">Giá</th>
                                    <th className="text-center" scope="col">
                                        Hủy
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectChair.map((item, index) => {
                                    priceAll += item.gia;
                                    return (
                                        <tr key={index}>
                                            <th className="fw-bold text-warning">
                                                {item.soGhe}
                                            </th>
                                            <td className="fw-bold text-warning">
                                                {item.gia}
                                            </td>
                                            <td className="text-center">
                                                <button
                                                    className="btn btn-danger fw-bold"
                                                    onClick={() => {
                                                        deleteChair(item);
                                                    }}
                                                >
                                                    x
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}

                                <tr>
                                    <th scope="row">Tổng</th>
                                    <td className="fw-bold text-warning" colSpan={2}>
                                        {priceAll}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        selectChair: state.movieReducer.selectChair,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteChair: (data) => {
            const action = {
                type: "DELETE_CHAIR",
                payload: data,
            };
            dispatch(action);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectChair);
