import React, { Component } from "react";

export default class DemoState extends Component {
    state = {
        number: 1,
    };
    handleUp() {
        this.setState({
            number: this.state.number + 1,
        });
    }
    handleDown() {
        this.setState({
            number: this.state.number - 1,
        });
    }
    render() {
        return (
            <div className="d-flex gap-5 align-items-center">
                <button
                    onClick={() => {
                        this.handleDown();
                    }}
                    className="btn btn-success"
                >
                    -
                </button>
                <span>{this.state.number}</span>
                <button
                    onClick={() => {
                        this.handleUp();
                    }}
                    className="btn btn-success"
                >
                    +
                </button>
            </div>
        );
    }
}
