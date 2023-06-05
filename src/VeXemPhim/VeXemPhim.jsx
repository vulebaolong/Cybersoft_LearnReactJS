import React, { Component } from "react";
import ListChair from "./components/ListChair";
import "./VeXemPhim.css";
import SelectChair from "./components/SelectChair";
export default class VeXemPhim extends Component {
    render() {
        return (
            <div className="container">
                <div className="row text-white">
                    <div className="col-8">
                        <ListChair />
                    </div>
                    <div className="col-4">
                        <SelectChair />
                    </div>
                </div>
            </div>
        );
    }
}
