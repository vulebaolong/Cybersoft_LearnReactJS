import { useDispatch } from "react-redux";
import { changeNumAction, deleteToCartAction } from "../redux/learnReduxToolkitReducer";
function ItemCartShoe(props) {
    const dispatch = useDispatch();
    const createName = (name) => {
        if (name.length > 10) {
            return name.slice(0, 20) + "...";
        }
        return name;
    };
    const { shoe } = props;
    const handleDeleteCart = (shoe) => {
        dispatch(deleteToCartAction(shoe));
    };
    const handleChangeNum = (shoe, option) => {
        dispatch(changeNumAction({ shoe, option }));
    };
    return (
        <div className="d-flex gap-2 border rounded-2 p-2 ">
            <div
                className="border rounded-2 d-flex align-items-center p-2"
                style={{ width: "20%" }}
            >
                <img
                    src={shoe.image}
                    className=""
                    alt={shoe.name}
                    style={{ width: "100%" }}
                />
            </div>
            <div style={{ width: "100%" }}>
                <div className="d-flex gap-2 justify-content-between">
                    <h5>{createName(shoe.name)}</h5>
                    <span className="">{`${shoe.price} ₫`}</span>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center justify-content-center gap-2">
                        <button
                            onClick={() => {
                                handleChangeNum(shoe, -1);
                            }}
                            className="btn btn-warning"
                        >
                            <i className="w-5 fa-solid fa-minus" />
                        </button>
                        <p className="m-0">{shoe.num}</p>
                        <button
                            onClick={() => {
                                handleChangeNum(shoe, 1);
                            }}
                            className="btn btn-warning"
                        >
                            <i className="w-5 fa-solid fa-plus" />
                        </button>
                    </div>
                    <div className="">
                        <button
                            onClick={() => {
                                handleDeleteCart(shoe);
                            }}
                            className="btn btn-danger"
                        >
                            Xóa
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ItemCartShoe;
