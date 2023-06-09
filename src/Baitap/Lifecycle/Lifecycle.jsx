import React, { Component } from "react";
// import Mounting from "./DemoLifecycle/Mounting";
// import Updating from "./DemoLifecycle/Updating";
import Unmounting from "./DemoLifecycle/Unmounting";

export default class Lifecycle extends Component {
    render() {
        return (
            <div className="">
                {/* <Mounting /> */}
                {/* <Updating /> */}
                <Unmounting />
            </div>
        );
    }
}
