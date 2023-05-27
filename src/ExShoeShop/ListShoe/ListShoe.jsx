import React, { Component } from "react";
import ItemShoe from "./ItemShoe/ItemShoe";

export default class ListShoe extends Component {
    renderListShoe = () => {
        return this.props.shoeArr.map((item) => {
            return (
                <ItemShoe
                    key={item.id}
                    clickDetail={this.props.clickDetail}
                    handleAddToCart={this.props.handleAddToCart}
                    item={item}
                />
            );
        });
    };
    render() {
        return <div className="row">{this.renderListShoe()}</div>;
    }
}
