import React, { Component } from "react";
import HeaderLayout from "./Component/HeaderLayout";
import ContentLayout from "./Component/ContentLayout";
import FooterLayout from "./Component/FooterLayout";
import NavLayout from "./Component/NavLayout";

export default class ExLayout extends Component {
    render() {
        return (
            <div className="container">
                <HeaderLayout />
                <div className="row">
                    <div className="col-4 pe-0">
                        <NavLayout />
                    </div>
                    <div className="col-8 ps-0">
                        <ContentLayout />
                    </div>
                </div>
                <FooterLayout />
            </div>
        );
    }
}
