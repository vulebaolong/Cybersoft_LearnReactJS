import React, { Component } from "react";
import { shoeArr } from "./data";
import DetailShoe from "./DetailShoe/DetailShoe";
import ListShoe from "./ListShoe/ListShoe";
import CartShoe from "./CartShoe/CartShoe";

export default class ExShoeShopRedux extends Component {
    state = {
        shoeArr: shoeArr,
        detailShoe: shoeArr[0],
        cart: [],
    };

    handleChangeNum = (shoe, option) => {
        const cloneCart = [...this.state.cart];
        const index = cloneCart.findIndex((item) => {
            return item.name === shoe.name;
        });
        cloneCart[index].num += option;
        if (cloneCart[index].num === 0) {
            cloneCart.splice(index, 1);
        }
        this.setState({
            cart: cloneCart,
        });
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-6">
                        <DetailShoe />
                        <CartShoe />
                    </div>
                    <div className="col-6">
                        <ListShoe />
                    </div>
                </div>
            </div>
        );
    }
}
