import { useDispatch } from "react-redux";
import { addToCart, viewDetailAction } from "../redux/learnReduxToolkitReducer";

function ItemShoe(props) {
    const dispatch = useDispatch();
    const { shoe } = props;
    const handleViewDetailRedux = (shoe) => {
        dispatch(viewDetailAction(shoe));
    };
    const handleAddToCartRedux = (shoe) => {
        dispatch(addToCart(shoe));
    };
    return (
        <div className="col-12 col-lg-6 col-xl-4 ">
            <div className="card p-3 h-100 justify-content-between gap-2">
                <div className="">
                    <img src={shoe.image} className="card-img-top" alt={shoe.name} />
                    <h5 className="card-title">{shoe.name}</h5>
                    <p className="card-text">{shoe.description}</p>
                </div>
                <div className="d-flex gap-2 mt-3">
                    <button
                        onClick={() => {
                            handleViewDetailRedux(shoe);
                        }}
                        className="btn btn-primary"
                    >
                        Xem chi tiết
                    </button>
                    <button
                        onClick={() => {
                            handleAddToCartRedux(shoe);
                        }}
                        className="btn btn-secondary"
                    >
                        Mua
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ItemShoe;
