import React, { Component } from "react";

export default class DetailMovie extends Component {
    render() {
        const {
            maPhim,
            tenPhim,
            biDanh,
            trailer,
            hinhAnh,
            moTa,
            maNhom,
            ngayKhoiChieu,
            danhGia,
        } = this.props.detail;
        return (
            <div>
                <p>{maPhim}</p>
                <p>{tenPhim}</p>
                <p>{biDanh}</p>
                <p>{trailer}</p>
                <p>{hinhAnh}</p>
                <p>{moTa}</p>
                <p>{maNhom}</p>
                <p>{ngayKhoiChieu}</p>
                <p>{danhGia}</p>
            </div>
        );
    }
}
