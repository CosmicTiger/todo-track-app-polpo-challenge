import React from 'react';
import Loader from "react-loader-spinner";

const Spinner = () => {
    return (
        <div className="animated fadeIn pt-3 text-center Spinner">
            <Loader className="Spinner-loader" type="Oval" color="#1d3557" height={120} width={120} />
            <span className="Spinner-text">Loading...</span>
        </div>
    )
}

export default Spinner
