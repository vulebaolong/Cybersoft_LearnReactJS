import React, { Component } from "react";

export default class ExStateCar extends Component {
    state = {
        url: "./img/CarBasic/products/black-car.jpg",
    };
    handleColor(color) {
        this.setState({
            url: `./img/CarBasic/products/${color}-car.jpg`,
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <img style={{ width: "100%" }} src={this.state.url} alt="" />
                    </div>
                    <div className="col-4 d-flex gap-5">
                        <button
                            onClick={() => {
                                this.handleColor("black");
                            }}
                            className="btn btn-success"
                        >
                            Black
                        </button>
                        <button
                            onClick={() => {
                                this.handleColor("red");
                            }}
                            className="btn btn-success"
                        >
                            Red
                        </button>
                        <button
                            onClick={() => {
                                this.handleColor("silver");
                            }}
                            className="btn btn-success"
                        >
                            Silver
                        </button>
                        <button
                            onClick={() => {
                                this.handleColor("steel");
                            }}
                            className="btn btn-success"
                        >
                            Steel
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
