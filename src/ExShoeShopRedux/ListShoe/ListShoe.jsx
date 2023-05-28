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
        const { shoeReducer } = this.props;
        const { shoeArr } = shoeReducer;
        return <div className="row">{this.renderListShoe(shoeArr)}</div>;
    }
}

// lấy dữ liệu từ store trở thành props
let mapStateToProps = (state) => {
    return {
        shoeReducer: state.shoeReducer,
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
