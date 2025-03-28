import React, { useEffect, useState } from "react";

const AdMaxSidebar = ({ pcAdId, mobileAdId }) => {
    const [isMobile, setIsMobile] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // 初回レンダリング時に実行
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isMobile === null) return; // isMobileが設定されるまで待つ

        const adId = isMobile ? mobileAdId : pcAdId;
        console.log("広告ID:", adId); // デバッグ用ログ

        window.admaxads = window.admaxads || [];

        // 既に登録済みの広告IDがあるかチェック
        if (!window.admaxads.some(ad => ad.admax_id === adId)) {
            window.admaxads.push({ admax_id: adId, type: "banner" });
        }

        // すでにスクリプトが追加されているかチェック
        if (!document.querySelector("script[src='https://adm.shinobi.jp/st/t.js']")) {
            const script = document.createElement("script");
            script.src = "https://adm.shinobi.jp/st/t.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, [isMobile, pcAdId, mobileAdId]);

    if (isMobile === null) {
        return null; // isMobileが判定されるまで何も表示しない
    }

    return (
        <div
            style={{
                position: "fixed",
                bottom: isMobile ? "50px" : "auto",
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
