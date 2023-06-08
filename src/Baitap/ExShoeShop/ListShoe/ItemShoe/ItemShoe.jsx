import React, { Component } from "react";

export default class ItemShoe extends Component {
    render() {
        return (
            <div className="col-6">
                <div className="card p-4 h-100" style={{ width: "18rem" }}>
                    <img src={this.props.item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.item.name}</h5>
                        <p className="card-text">{this.props.item.description}</p>
                    </div>
                    <button
                        onClick={() => {
                            this.props.clickDetail(this.props.item);
                        }}
                        href="#"
                        className="btn btn-primary"
                    >
                        Xem chi tiết
                    </button>
                    <button
                        onClick={() => {
                            this.props.handleAddToCart(this.props.item);
                        }}
                        className="btn btn-secondary"
                    >
                        Mua
                    </button>
                </div>
            </div>
        );
    }
}
