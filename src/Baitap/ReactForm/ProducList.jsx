import React, { Component } from "react";

export default class ProducList extends Component {
    renderListProduct = (data) => {
        return data.map((product) => {
            return (
                <tr key={product.id}>
                    <th scope="row">{product.id}</th>
                    <td>
                        <img src={product.image} alt="" />
                    </td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                    <td>{product.type}</td>
                    <td>
                        <button className="btn btn-danger me-2">
                            <i className="fa-solid fa-trash"></i>
                        </button>
                        <button className="btn btn-primary">
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                    </td>
                </tr>
            );
        });
    };

    render() {
        const { data } = this.props;
        return (
            <div className="mt-5">
                <h2>Danh sach san pham</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Type</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderListProduct(data)}</tbody>
                </table>
            </div>
        );
    }
}
