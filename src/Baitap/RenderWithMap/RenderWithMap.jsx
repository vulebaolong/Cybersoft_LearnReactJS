import React, { Component } from "react";
import { data } from "./data";
import ItemMovie from "./ItemMovie/ItemMovie";

export default class RenderWithMap extends Component {
    renderMovieList = function () {
        return data.map(function (item, i) {
            return <ItemMovie key={item.maPhim} item={item} />;
        });
    };
    render() {
        return (
            <div className="container">
                <div className="row">{this.renderMovieList()}</div>
            </div>
        );
    }
}
