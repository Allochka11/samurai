import React from "react";
import preloader from "../../../assets/images/Spinner-1.4s-200px.svg";

type PreloaderType = {}

export const Preloader = (props: PreloaderType) => {

    return (
        <div>
            <img src={preloader} alt="" style={{width: '50px', height: '50px'}}/>
        </div>
    );
};