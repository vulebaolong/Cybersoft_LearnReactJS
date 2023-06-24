import CartShoe from "./CartShoe/CartShoe";
import ListShoe from "./ListShoe/ListShoe";
import DetailShoe from "./DetailShoe/DetailShoe";

function LearnReduxToolkit() {
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
export default LearnReduxToolkit;
