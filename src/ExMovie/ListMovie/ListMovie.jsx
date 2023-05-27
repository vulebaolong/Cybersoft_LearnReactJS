import React, { Component } from "react";
import ItemMovie from "./ItemMovie/ItemMovie";

export default class ListMovie extends Component {
    render() {
        const { movieArr, handleChangeDetail } = this.props;
        return (
            <div className="row">
                {movieArr.map((movie) => {
                    return (
                        <ItemMovie
                            handleChangeDetail={handleChangeDetail}
                            key={movie.maPhim}
                            movie={movie}
                        />
                    );
                })}
            </div>
        );
    }
}
