import React, { Component } from "react";
const moment = require("moment");

export default class ItemMovie extends Component {
    createMovieName = (name) => {
        if (name.length > 10) {
            return name.slice(0, 10) + "...";
        }
        return name;
    };
    render() {
        const { movie, handleChangeDetail } = this.props;
        const { tenPhim, hinhAnh, ngayKhoiChieu } = movie;
        return (
            <div className="col-3">
                <div className="card p-4">
                    <img
                        src={hinhAnh}
                        style={{ height: 200 }}
                        className="card-img-top"
                        alt={tenPhim}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{this.createMovieName(tenPhim)}</h5>
                        <p className="card-text">
                            {moment(ngayKhoiChieu).format("DD-MM-YYYY")}
                        </p>
                    </div>
                    <button
                        onClick={() => {
                            handleChangeDetail(movie);
                        }}
                        className="btn btn-success"
                    >
                        xem
                    </button>
                </div>
            </div>
        );
    }
}
