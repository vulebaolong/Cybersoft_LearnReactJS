import React, { Component } from "react";
import ProducList from "./ProducList";

export default class Product extends Component {
    state = {
        values: {
            id: "",
            image: "https://picsum.photos/80",
            name: "",
            type: "Apple",
            price: 0,
            description: "",
        },
        errors: {
            id: "",
            image: "",
            name: "",
            type: "",
            price: "",
            description: "",
        },
        listProduct: [
            {
                description: "Mo ta san pham",
                id: "123ABC",
                image: "https://picsum.photos/80",
                name: "Iphonge 14",
                price: "270000000",
                type: "Apple",
            },
        ],
    };

    handleForm = (e) => {
        const { name, value } = e.target;
        let error = "";

        // id
        if (name === "id") {
            const reg = /^\d+$/;
            if (!reg.test(value)) {
                error = `${name} phải là số`;
            }
            if (reg.test(value)) {
                error = ``;
            }
        }

        if (value.trim() === "") {
            error = `${name} không đcợc để trống`;
        }
        this.setState(
            {
                values: { ...this.state.values, [name]: value },
                errors: { ...this.state.errors, [name]: error },
            },
            () => {
                // console.log(this.state);
            }
        );
    };

    handleSubmit = (e) => {
        // const copyState = JSON.parse(JSON.stringify(this.state));
        // copyState.listProduct.push()
        const copyState = JSON.parse(JSON.stringify(this.state));
        copyState.listProduct.push(copyState.values);
        console.log(this.state);
        this.setState({ ...this.state, listProduct: copyState.listProduct });
    };

    render() {
        const { values, errors, listProduct } = this.state;
        const { id, image, name, type, price, description } = values;
        console.log(this.state);
        return (
            <div className="container mt-5">
                <h2 className="text-center">Quản Lý Sản Phẩm</h2>
                <form className="row row-gap-5 mt-4">
                    <div className="col-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="id"
                                name="id"
                                id="id"
                                value={id}
                                onChange={this.handleForm}
                                onBlur={this.handleForm}
                            />
                            <label>id</label>
                            <span className="text-danger fst-italic">
                                * {errors.id && errors.id}
                            </span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="image"
                                name="image"
                                id="image"
                                value={image}
                                onChange={this.handleForm}
                                onBlur={this.handleForm}
                            />
                            <label>image</label>
                            <span className="text-danger fst-italic">
                                * {errors.image && errors.image}
                            </span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                id="name"
                                value={name}
                                onChange={this.handleForm}
                                onBlur={this.handleForm}
                            />
                            <label>Name</label>
                            <span className="text-danger fst-italic">
                                * {errors.name && errors.name}
                            </span>
                        </div>
                    </div>
                    <div className="col-6">
                        <select
                            id="type"
                            name="type"
                            className="form-select form-select-lg"
                            value={type}
                            onChange={this.handleForm}
                            onBlur={this.handleForm}
                        >
                            <option value="Apple">Apple</option>
                            <option value="Samsung">Samsung</option>
                        </select>
                        <span className="text-danger fst-italic">
                            * {errors.type && errors.type}
                        </span>
                    </div>
                    <div className="col-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Price"
                                name="price"
                                id="price"
                                value={price}
                                onChange={this.handleForm}
                                onBlur={this.handleForm}
                            />
                            <label htmlFor="floatingInput">Price</label>
                            <span className="text-danger fst-italic">
                                * {errors.price && errors.price}
                            </span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-floating">
                            <textarea
                                className="form-control"
                                placeholder="Description"
                                name="description"
                                id="description"
                                value={description}
                                onChange={this.handleForm}
                                onBlur={this.handleForm}
                            ></textarea>
                            <label htmlFor="floatingInput">Description</label>
                            <span className="text-danger fst-italic">
                                * {errors.description && errors.description}
                            </span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <button
                                    type="button"
                                    className="btn btn-success "
                                    style={{ width: "100%" }}
                                    onClick={() => {
                                        this.handleSubmit();
                                    }}
                                >
                                    Add
                                </button>
                            </div>
                            <div className="col-6">
                                <button
                                    type="button"
                                    className="btn btn-warning  "
                                    style={{ width: "100%" }}
                                    onClick={() => {
                                        this.handleSubmit();
                                    }}
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <ProducList data={listProduct} />
            </div>
        );
    }
}
