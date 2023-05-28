import React, { Component } from "react";
import { connect } from "react-redux";

class ItemShoe extends Component {
    render() {
        const { handleAddToCartRedux, handleViewDetailRedux, shoe } = this.props;
        return (
            <div className="col-6">
                <div className="card p-4 h-100" style={{ width: "18rem" }}>
                    <img src={shoe.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{shoe.name}</h5>
                        <p className="card-text">{shoe.description}</p>
                    </div>
                    <button
                        onClick={() => {
                            handleViewDetailRedux(shoe);
                        }}
                        className="btn btn-primary"
                    >
                        Go somewhere
                    </button>
                    <button
                        onClick={() => {
                            handleAddToCartRedux(shoe);
                        }}
                        className="btn btn-secondary"
                    >
                        Mua
                    </button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleViewDetailRedux: (shoe) => {
            dispatch({
                type: "VIEW_DETAIL",
                payload: shoe,
            });
        },
        handleAddToCartRedux: (shoe) => {
            dispatch({
                type: "ADD_CART",
                payload: shoe,
            });
        },
    };
};

export default connect(null, mapDispatchToProps)(ItemShoe);
