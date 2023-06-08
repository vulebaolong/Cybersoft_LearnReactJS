import React, { Component } from "react";
import ListChair from "./components/ListChair";
import style from "./VeXemPhim.module.css";
import SelectChair from "./components/SelectChair";
export default class VeXemPhim extends Component {
    render() {
        return (
            <div className={style.veXemPhim}>
                <div
                    className="container"
                    style={{ height: "100%", position: "relative", zIndex: 1 }}
                >
                    <div className="row text-white">
                        <div className="col-8">
                            <ListChair />
                        </div>
                        <div className="col-4">
                            <SelectChair />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
