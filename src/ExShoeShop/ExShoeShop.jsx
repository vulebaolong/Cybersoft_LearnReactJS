import React, { Component } from "react";
import { shoeArr } from "./data";
import DetailShoe from "./DetailShoe/DetailShoe";
import ListShoe from "./ListShoe/ListShoe";

export default class ExShoeShop extends Component {
    state = {
        shoeArr,
        detailShoe: shoeArr[0],
    };

    render() {
        return (
            <div>
                <ListShoe shoeArr={shoeArr} />
                <DetailShoe detail={this.state.detailShoe} />
            </div>
        );
    }
}
