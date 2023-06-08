import React, { Component } from "react";

export default class H3delete extends Component {
    state = {
        count: 1,
    };
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state === nextState) {
            return false;
        }
        return true;
    }
    render() {
        console.log("render H3delete");
        return <h3>Nếu number bằng 3 sẽ bị xóa / count {this.state.count}</h3>;
    }
    componentWillUnmount() {
        console.log("5 - componentWillUnmount");
    }
}
