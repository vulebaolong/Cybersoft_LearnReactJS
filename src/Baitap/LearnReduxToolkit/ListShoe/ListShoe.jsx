import { useDispatch, useSelector } from "react-redux";
import ItemShoe from "./ItemShoe";
import { useEffect } from "react";
import { getAllProduct } from "../redux/learnReduxToolkitReducer";

function ListShoe() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProduct());
    }, []);

    const { shoeArr } = useSelector((state) => state.learnReduxToolkitReducer);
    const renderListShoe = (shoeArr) => {
        return shoeArr.map((shoe) => {
            return <ItemShoe key={shoe.id} shoe={shoe} />;
        });
    };

    return (
        <div
            className="list_shoe d-flex flex-column p-3 border rounded-4"
            style={{ height: "80vh" }}
        >
            <h2 className="mb-5">Danh sách sản phẩm</h2>
            <div className="row row-gap-3 overflow-y-auto">{renderListShoe(shoeArr)}</div>
        </div>
    );
}
export default ListShoe;
