import React, { Component } from "react";
import DetailShoe from "./DetailShoe/DetailShoe";
import ListShoe from "./ListShoe/ListShoe";
import CartShoe from "./CartShoe/CartShoe";

export default class ExShoeShopRedux extends Component {
    render() {
        return (
            <div className="container py-5">
                <div className="row  row-gap-2">
                    <div className="col-lg-8 ">
                        <ListShoe />
                    </div>
                    <div
                        className="col-lg-4 d-flex flex-column gap-2 "
                        style={{ height: "80vh" }}
                    >
                        <DetailShoe />
                        <CartShoe />
                    </div>
                </div>
            </div>
        );
    }
}
