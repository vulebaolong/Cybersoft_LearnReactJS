import React, { Component } from "react";

export default class DemoLifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
        };
        console.log("1 - constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("2 - getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("2.5 - shouldComponentUpdate");
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("4.5 - componentDidUpdate");
    }

    render() {
        console.log("3 - render");
        return (
            <div className="container text-center">
                <h2 className=" mt-5">Life Cycle</h2>
                <button
                    type="button"
                    className="btn btn-primary mt-5"
                    onClick={() => {
                        this.setState({ number: this.state.number + 1 });
                    }}
                >
                    Notifications{" "}
                    <span className="badge text-bg-secondary">{this.state.number}</span>
                </button>
            </div>
        );
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("3.5 - getSnapshotBeforeUpdate");
    }

    componentDidMount() {
        console.log("4 - componentDidMount");
    }
}
