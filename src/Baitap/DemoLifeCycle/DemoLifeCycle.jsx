import React, { Component } from "react";
// import Child from "./Child";
import axios from "axios";

export default class DemoLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mes: "123",
            num: 1,
            list: [],
        };
        console.log("constructors");
    }

    // thông thường dùng để kiểm tra người dùng login
    static getDerivedStateFromProps(props, state) {
        console.log({ props, state });
        // state: của constructor
        // props: thằng cha truyền xuống
        console.log("getDerivedStateFromProps");
        return {
            ...state,
            mes: "abc",
        };
    }
    // giống getDerivedStateFromProps nhưng của trước version 16.4
    // componentWillUnmount() {
    //     console.log("componentWillUnmount");
    // }

    shouldComponentUpdate() {
        return true;
    }

    getProductlistAPI = async () => {
        const { data, status } = await axios.get(
            "https://shop.cyberlearn.vn/api/Product"
        );
        console.log({ data, status });
        this.setState({
            list: data.content,
        });
    };

    render() {
        console.log("render");
        const { num } = this.state || {};
        return (
            <div className="container">
                DemoLifeCycle
                <div className="row">
                    {this.state.list.map((item) => {
                        return (
                            <div key={item.id} className="col-4 ">
                                <div className="card">
                                    <img
                                        src={item.image}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <a href="/" className="btn btn-primary">
                                            Go somewhere
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* <p>{num}</p>
                <button
                    onClick={() => {
                        this.setState({
                            num: num + 1,
                        });
                    }}
                >
                    Tăng Number
                </button>
                <Child num={num} /> */}
            </div>
        );
    }

    componentDidMount() {
        // call API => data => setState
        this.getProductlistAPI();
        console.log("componentDidMount");
    }
    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate(nextProps, nextState, snapshot) {
        console.log("componentDidUpdate");
        // let getParamURL = window.location.search;
        // let id = new
    }
}
