import React, { Component } from "react";
import ItemCartShoe from "./ItemCartShoe/ItemCartShoe";
import { connect } from "react-redux";

class CartShoe extends Component {
    render() {
        const { cart } = this.props;
        return (
            <div className="border rounded-4 p-3 flex-grow-1 " style={{ height: "40%" }}>
                <h2>Giỏ hàng</h2>
                <div
                    className="overflow-y-auto d-flex flex-column gap-2"
                    style={{ height: "85%" }}
                >
                    {cart.map((shoe) => {
                        return <ItemCartShoe key={shoe.id} shoe={shoe} />;
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.ExShoeShopRedux.cart,
    };
};

export default connect(mapStateToProps)(CartShoe);
