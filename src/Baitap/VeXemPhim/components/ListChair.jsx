import React, { Component } from "react";
import { connect } from "react-redux";
import style from "../VeXemPhim.module.css";

class ListChair extends Component {
    render() {
        const { movies, addChair, selectChair } = this.props;
        const handleGhe = (itemGhe, index2) => {
            // className ghế chưa đặt
            let classs = `${style.gheChuaDat}`;

            // className ghế đang chọn
            const indexSelect = selectChair.findIndex(
                (itemSelect) => itemSelect.soGhe === itemGhe.soGhe
            );
            if (indexSelect !== -1) classs = `${style.gheDangChon}`;

            // className ghế đã đặt
            if (itemGhe.daDat) classs = `${style.gheDaDat}`;

            return (
                <div
                    className={classs}
                    onClick={() => {
                        addChair(itemGhe);
                    }}
                    key={index2}
                >
                    <span>{itemGhe.soGhe}</span>
                </div>
            );
        };
        return (
            <div>
                <h2 className="text-center my-5">ĐẶT VÉ XEM PHIM</h2>
                <h5 className="text-center">Màn hình</h5>
                <div className={style.screen}></div>
                <div className="">
                    {movies.map((item, index1) => {
                        return (
                            <div
                                className={`${style.hang} d-flex mb-3 gap-3 justify-content-center`}
                                key={index1}
                            >
                                {/* Cột A, B, C */}
                                <div className={style.cot}>
                                    <span>{item.hang}</span>
                                </div>

                                {/* Các thằng nhỏ 1, 2, 3 và A1, A2, A3*/}
                                {item.danhSachGhe.map((itemGhe, index2) => {
                                    /* Các thằng nhỏ A1, A2 */
                                    if (index1 !== 0) {
                                        return handleGhe(itemGhe, index2);
                                    }

                                    // Hàng đầu tiền 1, 2, 3, 4 ....
                                    if (index1 === 0) {
                                        return (
                                            <div className={style.hang_1} key={index2}>
                                                <span>{itemGhe.soGhe}</span>
                                            </div>
                                        );
                                    }
                                    return "";
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.VeXemPhim.movies,
        selectChair: state.VeXemPhim.selectChair,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addChair: (data) => {
            const action = {
                type: "ADD_CHAIR",
                payload: data,
            };
            dispatch(action);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListChair);
