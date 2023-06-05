import React, { Component } from "react";

export default class H3delete extends Component {
    render() {
        return <h3>Nếu number bằng 3 sẽ bị xóa</h3>;
    }
    componentWillUnmount() {
        console.log("5 - componentWillUnmount");
    }
}
