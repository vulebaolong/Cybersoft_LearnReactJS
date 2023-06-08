import React, { Component } from "react";
import UserInfo from "./UserInfo/UserInfo";

export default class DemoProp extends Component {
    state = {
        username: "bảo long",
    };
    handleChangeName = () => {
        const name = this.state.username === "bảo long" ? "123123123" : "bảo long";

        this.setState({
            username: name,
        });
    };
    render() {
        return (
            <div>
                <UserInfo
                    name={this.state.username}
                    handleClick={this.handleChangeName}
                />
            </div>
        );
    }
}
