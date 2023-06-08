import React, { Component } from "react";
import { connect } from "react-redux";
import style from "../VeXemPhim.module.css";

class SelectChair extends Component {
    render() {
        const { selectChair, deleteChair } = this.props;
        let priceAll = 0;
        return (
            <div style={{ height: "100%" }} className="d-flex flex-column">
                <h2 className="text-center my-5 ">Danh sách ghế bạn chọn</h2>
                <div className="d-flex justify-content-start align-items-center gap-2">
                    <div className={style.gheDaDat}></div>
                    <span className="fw-bolder">Ghế đã đặt</span>
                </div>
                <div className="d-flex justify-content-start align-items-center gap-2 my-2">
                    <div className={style.gheDangChon}></div>
                    <span className="fw-bolder">Ghế đang chọn</span>
                </div>
                <div className="d-flex justify-content-start align-items-center gap-2">
                    <div className={style.gheChuaDat}></div>
                    <span className="fw-bolder">Ghế chưa đặt</span>
                </div>
                <div className="mt-4">
                    <table className="table border-white table-bordered text-white m-0">
                        <thead style={{ display: "block" }}>
                            <tr className="d-flex">
                                <th style={{ flexBasis: "40%" }} scope="col">
                                    Số ghế
                                </th>
                                <th style={{ flexBasis: "30%" }} scope="col">
                                    Giá
                                </th>
                                <th style={{ flexBasis: "30%" }} scope="col">
                                    Hủy
                                </th>
                            </tr>
                        </thead>
                        <tbody
                            style={{
                                display: "block",
                                maxHeight: "401px",
                                overflowY: "scroll",
                                marginRight: "-0.375rem",
                            }}
                        >
                            {selectChair.map((item, index) => {
                                priceAll += item.gia;
                                return (
                                    <tr className="d-flex" key={index}>
                                        <th
                                            style={{ flexBasis: "40%" }}
                                            className="fw-bold text-warning"
                                        >
                                            {item.soGhe}
                                        </th>
                                        <td
                                            style={{ flexBasis: "30%" }}
                                            className="fw-bold text-warning"
                                        >
                                            {item.gia}
                                        </td>
                                        <td
                                            style={{ flexBasis: "30%" }}
                                            className="text-center"
                                        >
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
                        </tbody>
                        <tfoot style={{ display: "block" }}>
                            <tr className="d-flex">
                                <th style={{ flexBasis: "40%" }} scope="row">
                                    Tổng
                                </th>
                                <td
                                    style={{ flexBasis: "60%" }}
                                    className="fw-bold text-warning"
                                    colSpan={2}
                                >
                                    {priceAll}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        selectChair: state.VeXemPhim.selectChair,
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
