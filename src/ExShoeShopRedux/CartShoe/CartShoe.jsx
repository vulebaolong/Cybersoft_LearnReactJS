import React, { Component } from "react";

export default class CartShoe extends Component {
    render() {
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
                        {this.props.cart.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <th scope="row">{item.name}</th>
                                    <td className="">
                                        <div className="d-flex gap-2">
                                            <button
                                                onClick={() => {
                                                    this.props.handleChangeNum(item, 1);
                                                }}
                                                className="btn btn-primary"
                                            >
                                                +
                                            </button>
                                            <p>{item.num}</p>
                                            <button
                                                onClick={() => {
                                                    this.props.handleChangeNum(item, -1);
                                                }}
                                                className="btn btn-primary"
                                            >
                                                -
                                            </button>
                                        </div>
                                    </td>
                                    <td>{+item.price * +item.num}</td>
                                    <td>
                                        <img
                                            style={{ width: "50%" }}
                                            src={item.image}
                                            alt=""
                                        />
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                this.props.handleDeleteCart(item);
                                            }}
                                            className="btn btn-primary"
                                        >
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
