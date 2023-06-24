import { useSelector } from "react-redux";
function DetailShoe(props) {
    const { viewDetail } = useSelector((state) => state.learnReduxToolkitReducer);
    const createText = (name) => {
        if (name?.length > 10) {
            return name.slice(0, 90) + "...";
        }
        return name;
    };
    return (
        <div className="border rounded-4 p-3">
            <h2>Thông tin chi tiết</h2>
            <div className="">
                <div className="">
                    <span className="fw-bold">Tên: </span>
                    <span>{viewDetail.name}</span>
                </div>
                <div className="">
                    <span className="fw-bold">Giá: </span>
                    <span>{viewDetail.price}</span>
                </div>
                <div className="">
                    <span className="fw-bold">Mô tả: </span>
                    <span>{createText(viewDetail.description)}</span>
                </div>
                <div className="">
                    <span className="fw-bold">Số lượng: </span>
                    <span>{viewDetail.quantity}</span>
                </div>
                <div className="">
                    <span className="fw-bold">Hình ảnh:</span>
                    <div className="mx-auto" style={{ width: "50%" }}>
                        <img
                            src={viewDetail.image}
                            alt={viewDetail.name}
                            style={{ width: "100%" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DetailShoe;
