import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
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
                        <Route 
                            path="/" 
                            element={
                                <>
                                    <Helmet>
                                        <title>ホーム - なつかしのビデオ</title>
                                        <meta name="description" content="ホームページの説明" />
                                    </Helmet>
                                    <DMMSearch />
                                </>
                            } 
                        />
                        <Route 
                            path="/productlist" 
                            element={
                                <>
                                    <Helmet>
                                        <title>商品一覧 - なつかしのビデオ</title>
                                        <meta name="description" content="商品一覧の説明" />
                                    </Helmet>
                                    <ProductList />
                                </>
                            } 
                        />
                        <Route 
                            path="/product" 
                            element={
                                <>
                                    <Helmet>
                                        <title>商品詳細 - なつかしのビデオ</title>
                                        <meta name="description" content="商品詳細の説明" />
                                    </Helmet>
                                    <ProductPage />
                                </>
                            } 
                        />
                    </Routes>
                </div>

                {/* 右サイド（PC用）or 下部（スマホ用）の広告 */}
                <AdMaxSidebar 
                    pcAdId="ba281c3fd80c3516aea3a150ed28a334" 
                    mobileAdId="dc1f16d01b6d9e6b34c5474923361e51" // スマホ用ID
                    interstitialAdId="2d1136f505a6645ef4d401e2f7f5cfda"
                />
            </div>
        </Router>
    );
};

export default App;
