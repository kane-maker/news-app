import React from "react";
import Iframe from "react-iframe";

const AdmaxAd = () => {
    return (
        <Iframe
            // src="https://73f92o14r4.execute-api.ap-northeast-1.amazonaws.com/dev/ads"
            src="/ad.html" 
            style={{ width: "300px", height: "250px", border: "none" }}
            title="Admax Ad"
        />
    );
};

export default AdmaxAd;
