import React, { Component } from "react";
import { connect } from "react-redux";

class DetailShoe extends Component {
    render() {
        const { shoeReducer } = this.props;
        const { viewDetail } = shoeReducer;
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{viewDetail.name}</th>
                            <td>{viewDetail.price}</td>
                            <td>{viewDetail.description}</td>
                            <td>{viewDetail.quantity}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        shoeReducer: state.shoeReducer,
    };
};

export default connect(mapStatetoProps)(DetailShoe);
