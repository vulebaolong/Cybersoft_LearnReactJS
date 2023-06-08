import React, { Component } from "react";
import ItemShoe from "./ItemShoe/ItemShoe";
import { connect } from "react-redux";

class ListShoe extends Component {
    renderListShoe = (shoeArr) => {
        return shoeArr.map((shoe) => {
            return <ItemShoe key={shoe.id} shoe={shoe} />;
        });
    };
    render() {
        const { shoeArr } = this.props;
        return (
            <div
                className="list_shoe d-flex flex-column p-3 border rounded-4"
                style={{ height: "80vh" }}
            >
                <h2 className="mb-5">Danh sách sản phẩm</h2>
                <div className="row row-gap-3 overflow-y-auto">
                    {this.renderListShoe(shoeArr)}
                </div>
            </div>
        );
    }
}

// lấy dữ liệu từ store trở thành props
let mapStateToProps = (state) => {
    return {
        shoeArr: state.ExShoeShopRedux.shoeArr,
    };
};

export default connect(mapStateToProps)(ListShoe);
