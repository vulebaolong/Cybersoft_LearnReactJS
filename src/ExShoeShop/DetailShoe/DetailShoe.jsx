import React, { Component } from "react";

export default class DetailShoe extends Component {
    render() {
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
                            <th scope="row">{this.props.detail.name}</th>
                            <td>{this.props.detail.price}</td>
                            <td>{this.props.detail.description}</td>
                            <td>{this.props.detail.quantity}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
