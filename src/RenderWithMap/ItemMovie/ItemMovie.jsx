import React, { Component } from "react";

export default class ItemMovie extends Component {
    render() {
        return (
            <div key={this.props.item.maPhim} className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                    <img
                        src={this.props.item.hinhAnh}
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">${this.props.item.tenPhim}</h5>
                        <p className="card-text">${this.props.item.moTa}</p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
