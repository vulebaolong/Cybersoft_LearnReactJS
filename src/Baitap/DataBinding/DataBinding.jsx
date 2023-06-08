import React, { Component } from "react";

export default class DataBinding extends Component {
    urlImg =
        "https://cdn.leonardo.ai/users/e2c4ccaa-626a-423a-990b-033b65442cf2/generations/80470929-86a8-4826-8b3b-847a840b2d3d/variations/Default_Woman_with_platinum_hair_in_a_dress_of_ice_flowers_a_b_0_80470929-86a8-4826-8b3b-847a840b2d3d_1.jpg";

    renderUserAge() {
        return 20;
    }
    render() {
        let userName = "Bảo Long";
        return (
            <div>
                <h2>{userName}</h2>
                <div className="container ">
                    <img
                        className="mx-auto d-block"
                        src={this.urlImg}
                        alt=""
                        style={{ width: "50%" }}
                    />
                </div>
                <p>{this.renderUserAge()}</p>
            </div>
        );
    }
}
