import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeTamplate from "./Templates/HomeTamplate";
import DataBinding from "./Baitap/DataBinding/DataBinding";
import DemoMiniRedux from "./Baitap/DemoMiniRedux/DemoMiniRedux";
import DemoProp from "./Baitap/DemoProp/DemoProp";
import DemoState from "./Baitap/DemoState/DemoState";
import EventHanding from "./Baitap/EventHanding/EventHanding";
import ExLayout from "./Baitap/ExLayout/ExLayout";
import ExMovie from "./Baitap/ExMovie/ExMovie";
import ExShoeShop from "./Baitap/ExShoeShop/ExShoeShop";
import ExShoeShopRedux from "./Baitap/ExShoeShopRedux/ExShoeShopRedux";
import ExStateCar from "./Baitap/ExStateCar/ExStateCar";
import Lifecycle from "./Baitap/Lifecycle/Lifecycle";
import RenderWithMap from "./Baitap/RenderWithMap/RenderWithMap";
import VeXemPhim from "./Baitap/VeXemPhim/VeXemPhim";
import DemoLifeCycle from "./Baitap/DemoLifeCycle/DemoLifeCycle";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<HomeTamplate />}>
                        <Route path="databinding" element={<DataBinding />} />
                        <Route path="demominiredux" element={<DemoMiniRedux />} />
                        <Route path="demoprop" element={<DemoProp />} />
                        <Route path="demostate" element={<DemoState />} />
                        <Route path="eventhanding" element={<EventHanding />} />
                        <Route path="exlayout" element={<ExLayout />} />
                        <Route path="exmovie" element={<ExMovie />} />
                        <Route path="exshoeshop" element={<ExShoeShop />} />
                        <Route path="exshoeshopredux" element={<ExShoeShopRedux />} />
                        <Route path="exstatecar" element={<ExStateCar />} />
                        <Route path="lifecycle" element={<Lifecycle />} />
                        <Route path="renderwithmap" element={<RenderWithMap />} />
                        <Route path="vexemphim" element={<VeXemPhim />} />
                        <Route path="demolifecycle" element={<DemoLifeCycle />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
