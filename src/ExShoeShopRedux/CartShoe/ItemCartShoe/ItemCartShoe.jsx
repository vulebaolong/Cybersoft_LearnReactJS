import React, { Component } from "react";
import { CHANGE_NUM, DELETE_CART } from "../../redux/reducer/constant/shoeConstant";
import { connect } from "react-redux";

class ItemCartShoe extends Component {
    render() {
        const { shoe, handleDeleteCart, handleChangeNum } = this.props;
        return (
            <tr>
                <th scope="row">{shoe.name}</th>
                <td className="">
                    <div className="d-flex gap-2">
                        <button
                            onClick={() => {
                                handleChangeNum(shoe, 1);
                            }}
                            className="btn btn-primary"
                        >
                            +
                        </button>
                        <p>{shoe.num}</p>
                        <button
                            onClick={() => {
                                handleChangeNum(shoe, -1);
                            }}
                            className="btn btn-primary"
                        >
                            -
                        </button>
                    </div>
                </td>
                <td>{+shoe.price * +shoe.num}</td>
                <td>
                    <img style={{ width: "50%" }} src={shoe.image} alt="" />
                </td>
                <td>
                    <button
                        onClick={() => {
                            handleDeleteCart(shoe);
                        }}
                        className="btn btn-primary"
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDeleteCart: (shoe) => {
            const action = {
                type: DELETE_CART,
                payload: shoe,
            };
            dispatch(action);
        },
        handleChangeNum: (shoe, option) => {
            const action = {
                type: CHANGE_NUM,
                payload: { shoe, option },
            };
            dispatch(action);
        },
    };
};

export default connect(null, mapDispatchToProps)(ItemCartShoe);
