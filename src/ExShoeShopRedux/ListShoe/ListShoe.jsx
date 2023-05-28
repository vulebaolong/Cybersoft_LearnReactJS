import React, { Component } from "react";
import ItemShoe from "./ItemShoe/ItemShoe";
import { connect } from "react-redux";

class ListShoe extends Component {
    renderListShoe = () => {
        return this.props.shoeArr.map((item) => {
            return (
                <ItemShoe
                    key={item.id}
                    clickDetail={this.props.clickDetail}
                    handleAddToCart={this.props.handleAddToCart}
                    item={item}
                />
            );
        });
    };
    render() {
        console.log(this.props);
        return <div className="row">{this.renderListShoe()}</div>;
    }
}

// lấy dữ liệu từ store trở thành props
let mapStateToProps = (state) => {
    console.log(state);
    return {
        // shoeArrNew: state.abc,
    };
};

// viết hàm handle => đẩy data lên
// let mapDispatchToProps = (dispatch) => {
//     return {
//         handleChange: (value) => {
//             dispatch({
//                 type: TANG,
//                 payload: value,
//             });
//         },
//     };
// };

export default connect(mapStateToProps)(ListShoe);
