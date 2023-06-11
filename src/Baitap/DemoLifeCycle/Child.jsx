import React, { Component } from "react";

export default class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numChild: 1,
        };
        console.log("constructors child");
    }

    static getDerivedStateFromProps(props, state) {
        console.log({ props, state });
        return {
            ...state,
            numChild: props.num,
        };
    }
    render() {
        console.log("render child");
        return <div>Child {this.state.numChild}</div>;
    }
    componentDidMount() {
        // call API => data => setState
        console.log("componentDidMount child");
    }
}
