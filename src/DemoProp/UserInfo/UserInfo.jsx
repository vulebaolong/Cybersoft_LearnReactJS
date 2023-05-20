import React, { Component } from "react";

export default class UserInfo extends Component {
    render() {
        console.log(this.props.name);
        return (
            <div>
                <h2>{this.props.name}</h2>
                <button onClick={this.props.handleClick} className="btn btn-success">
                    click
                </button>
            </div>
        );
    }
}
