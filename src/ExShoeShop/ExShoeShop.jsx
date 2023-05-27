import React, { Component } from "react";
import { shoeArr } from "./data";
import DetailShoe from "./DetailShoe/DetailShoe";
import ListShoe from "./ListShoe/ListShoe";
import CartShoe from "./CartShoe/CartShoe";

export default class ExShoeShop extends Component {
    state = {
        shoeArr,
        detailShoe: shoeArr[0],
        cart: [],
    };

    handleViewDetail = (shoe) => {
        // console.log(123);
        this.setState({
            detailShoe: shoe,
        });
    };

    handleAddToCart = (shoe) => {
        // item
        const itemShoe = { ...shoe, num: 1 };

        //clone cart
        const cloneCart = [...this.state.cart];

        const index = cloneCart.findIndex((item) => {
            return item.name === itemShoe.name;
        });

        //1 nếu trùng
        if (index !== -1) {
            cloneCart[index].num++;
            this.setState({
                cart: cloneCart,
            });
            return;
        }

        //2 trùng
        cloneCart.push(itemShoe);
        this.setState({
            cart: cloneCart,
        });
    };

    handleDeleteCart = (shoe) => {
        const cloneCart = [...this.state.cart];
        const index = cloneCart.findIndex((item) => {
            return item.name === shoe.name;
        });
        cloneCart.splice(index, 1);
        this.setState({
            cart: cloneCart,
        });
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
                        <CartShoe
                            cart={this.state.cart}
                            handleDeleteCart={this.handleDeleteCart}
                            handleChangeNum={this.handleChangeNum}
                        />
                    </div>
                    <div className="col-6">
                        <ListShoe
                            handleAddToCart={this.handleAddToCart}
                            shoeArr={shoeArr}
                            clickDetail={this.handleViewDetail}
                        />
                    </div>
                </div>

                <DetailShoe detail={this.state.detailShoe} />
            </div>
        );
    }
}
