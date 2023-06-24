import { useSelector } from "react-redux";
import ItemCartShoe from "./ItemCartShoe";

function CartShoe() {
    const { cart } = useSelector((state) => state.learnReduxToolkitReducer);
    return (
        <div className="border rounded-4 p-3 flex-grow-1 " style={{ height: "40%" }}>
            <h2>Giỏ hàng</h2>
            <div
                className="overflow-y-auto d-flex flex-column gap-2"
                style={{ height: "85%" }}
            >
                item cart shoe
                {cart.map((shoe) => {
                    return <ItemCartShoe key={shoe.id} shoe={shoe} />;
                })}
            </div>
        </div>
    );
}
export default CartShoe;
