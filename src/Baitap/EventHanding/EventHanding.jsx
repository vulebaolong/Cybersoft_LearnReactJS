import React, { Component } from "react";

export default class EventHanding extends Component {
    btnNoHandel() {
        console.log(123);
    }
    btnYesHandel(value) {
        console.log(value);
    }
    render() {
        return (
            <div>
                <h2>Event handing</h2>
                <button className="btn btn-success me-5" onClick={this.btnNoHandel}>
                    Không tham số
                </button>
                <button
                    className="btn btn-success"
                    onClick={() => {
                        this.btnYesHandel("Truyền tham ôố");
                    }}
                >
                    Có tham số
                </button>
            </div>
        );
    }
}
