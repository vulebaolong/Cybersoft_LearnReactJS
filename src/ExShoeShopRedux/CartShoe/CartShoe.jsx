import React, { Component } from "react";
import ItemCartShoe from "./ItemCartShoe/ItemCartShoe";
import { connect } from "react-redux";

class CartShoe extends Component {
    render() {
        const { shoeReducer } = this.props;
        const { cart } = shoeReducer;
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Số Lượng</th>
                            <th scope="col">Price</th>
                            <th scope="col">image</th>
                            <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((shoe) => {
                            return <ItemCartShoe key={shoe.id} shoe={shoe} />;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shoeReducer: state.shoeReducer,
    };
};

export default connect(mapStateToProps)(CartShoe);
