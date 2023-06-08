import { NavLink } from "react-router-dom";

function Controll() {
    return (
        <div>
            <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                style={{ position: "fixed", bottom: "0", zIndex: 1 }}
            >
                Mở danh sách bài tập
            </button>
            <div
                className="offcanvas offcanvas-start"
                data-bs-scroll="true"
                tabIndex={-1}
                id="offcanvasWithBothOptions"
            >
                <div className="offcanvas-header">
                    <h5 className="m-0">Danh sách bài tập</h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                    />
                </div>
                <div className="offcanvas-body d-flex flex-column gap-2">
                    {/* HOME */}
                    <NavLink to="/">
                        <button className="btn btn-primary" data-bs-dismiss="offcanvas">
                            Home
                        </button>
                    </NavLink>

                    {/* DataBinding */}
                    <NavLink to="/databinding">
                        <button className="btn btn-primary" data-bs-dismiss="offcanvas">
                            DataBinding
                        </button>
                    </NavLink>

                    {/* DemoMiniRedux */}
                    <NavLink to="/demominiredux">
                        <button className="btn btn-primary" data-bs-dismiss="offcanvas">
                            DemoMiniRedux
                        </button>
                    </NavLink>

                    {/* DemoProp */}
                    <NavLink to="/demoprop">
                        <button className="btn btn-primary" data-bs-dismiss="offcanvas">
                            DemoProp
                        </button>
                    </NavLink>

                    {/* DemoState */}
                    <NavLink to="/demostate">
                        <button className="btn btn-primary" data-bs-dismiss="offcanvas">
                            DemoState
                        </button>
                    </NavLink>

                    {/* EventHanding */}
                    <NavLink to="/eventhanding">
                        <button className="btn btn-primary" data-bs-dismiss="offcanvas">
                            EventHanding
                        </button>
                    </NavLink>

                    {/* ExLayout */}
                    <NavLink to="/exlayout">
                        <button className="btn btn-primary" data-bs-dismiss="offcanvas">
                            ExLayout
                        </button>
                    </NavLink>

                    {/* ExMovie */}
                    <NavLink to="/exmovie">
                        <button className="btn btn-primary" data-bs-dismiss="offcanvas">
                            ExMovie
                        </button>
                    </NavLink>

                    {/* ExShoeShop */}
                    <NavLink to="/exshoeshop">
                        <button className="btn btn-primary" data-bs-dismiss="offcanvas">
                            ExShoeShop
                        </button>
                    </NavLink>

                    {/* ExShoeShopRedux */}
                    <NavLink to="/exshoeshopredux">
                        <button className="btn btn-primary" data-bs-dismiss="offcanvas">
                            ExShoeShopRedux
                        </button>
                    </NavLink>

                    {/* ExStateCar */}
                    <NavLink to="/exstatecar">
                        <button className="btn btn-primary" data-bs-dismiss="offcanvas">
                            ExStateCar
                        </button>
                    </NavLink>

                    {/* Lifecycle */}
                    <NavLink to="/lifecycle">
                        <button className="btn btn-primary" data-bs-dismiss="offcanvas">
                            Lifecycle
                        </button>
                    </NavLink>

                    {/* RenderWithMap */}
                    <NavLink to="/renderwithmap">
                        <button className="btn btn-primary" data-bs-dismiss="offcanvas">
                            RenderWithMap
                        </button>
                    </NavLink>

                    {/* VeXemPhim */}
                    <NavLink to="/vexemphim">
                        <button className="btn btn-primary" data-bs-dismiss="offcanvas">
                            VeXemPhim
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
export default Controll;
