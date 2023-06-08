import React, { Component } from "react";

export default class ItemMovie extends Component {
    render() {
        return (
            <div key={this.props.item.maPhim} className="col-4">
                <div className="card" style={{ height: "100%" }}>
                    <img
                        src={this.props.item.hinhAnh}
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body d-flex flex-column justify-content-between">
                        <h5 className="card-title">${this.props.item.tenPhim}</h5>
                        <p className="card-text">${this.props.item.moTa}</p>
                        <button href="/" className="btn btn-primary">
                            Go somewhere
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
