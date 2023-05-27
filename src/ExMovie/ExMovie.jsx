import React, { Component } from "react";
import { data } from "./data";
import ListMovie from "./ListMovie/ListMovie";
import DetailMovie from "./DetailMovie/DetailMovie";

export default class ExMovie extends Component {
    state = {
        movieArr: data,
        detail: data[0],
    };

    handleChangeDetail = (movie) => {
        console.log("cũ", this.state.detail.tenPhim);
        this.setState(
            {
                detail: movie,
            },
            () => {
                console.log("mới", this.state.detail.tenPhim);
            }
        );
    };
    render() {
        return (
            <div className="row">
                <div className="col-8">
                    <ListMovie
                        handleChangeDetail={this.handleChangeDetail}
                        movieArr={this.state.movieArr}
                    />
                </div>
                <div className="col-4">
                    <DetailMovie detail={this.state.detail} />
                </div>
            </div>
        );
    }
}
