import React, { Component } from "react";
import { connect } from "react-redux";

class ListChair extends Component {
    render() {
        const { movies, addChair, selectChair } = this.props;
        return (
            <div>
                <h2 className="text-center my-5">ĐẶT VÉ XEM PHIM</h2>
                <h5 className="text-center">Màn hình</h5>
                <div className="screen"></div>
                <div className="">
                    {movies.map((item, index1) => {
                        return (
                            <div
                                className="hang d-flex mb-3 gap-3 justify-content-center"
                                key={index1}
                            >
                                <div className="cot">
                                    <span>{item.hang}</span>
                                </div>

                                {item.danhSachGhe.map((itemGhe, index2) => {
                                    let ghe = (
                                        <div className="hang-1" key={index2}>
                                            <span>{itemGhe.soGhe}</span>
                                        </div>
                                    );
                                    if (index1 !== 0) {
                                        let classs = "ghe";
                                        const index = selectChair.findIndex(
                                            (itemSelect) =>
                                                itemSelect.soGhe === itemGhe.soGhe
                                        );
                                        if (index !== -1) {
                                            classs = "gheDangChon";
                                        }
                                        ghe = (
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
                                    }
                                    return ghe;
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
        movies: state.movieReducer.movies,
        selectChair: state.movieReducer.selectChair,
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
