import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DMMSearch from "./components/DMMSearch";
import ProductList from "./components/ProductList";
import ProductPage from "./components/ProductPage";
import AdMaxSidebar from "./components/AdMaxSidebar"; // 広告コンポーネント

const App = () => {
    return (
        <Router>
            <div style={{ display: "flex" }}>
                {/* メインコンテンツ */}
                <div style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<DMMSearch />} />
                        <Route path="/productlist" element={<ProductList />} />
                        <Route path="/product" element={<ProductPage />} />
                    </Routes>
                </div>

                {/* 右サイド（PC用）or 下部（スマホ用）の広告 */}
                <AdMaxSidebar 
                    pcAdId="ba281c3fd80c3516aea3a150ed28a334" 
                    mobileAdId="8ff1b1ebeb541e700b8323afb1d20756" // スマホ用ID
                />
            </div>
        </Router>
    );
};

export default App;
