import React, { useEffect, useState } from "react";

const AdMaxSidebar = ({ pcAdId, mobileAdId }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const adId = isMobile ? mobileAdId : pcAdId;
        
        window.admaxads = window.admaxads || [];
        if (!window.admaxads.some(ad => ad.admax_id === adId)) {
            window.admaxads.push({ admax_id: adId, type: "banner" });
        }

        const script = document.createElement("script");
        script.src = "https://adm.shinobi.jp/st/t.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [isMobile, pcAdId, mobileAdId]);

    return (
        <div
            style={{
                position: "fixed",
                bottom: isMobile ? "0px" : "auto",
                top: isMobile ? "auto" : "100px",
                right: isMobile ? "0px" : "10px",
                left: isMobile ? "0px" : "auto",
                width: isMobile ? "100%" : "160px",
                height: isMobile ? "50px" : "600px",
                backgroundColor: "#f4f4f4",
                border: "1px solid #ccc",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
            }}
        >
            <div className="admax-ads" data-admax-id={isMobile ? mobileAdId : pcAdId}></div>
        </div>
    );
};

export default AdMaxSidebar;
