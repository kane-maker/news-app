import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, Breadcrumbs, Link } from "@mui/material";

const ProductPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.product;
    const [selectedImage, setSelectedImage] = useState(null);

    if (!product) {
        return <div>商品情報が見つかりません。</div>;
    }

    const handleActressClick = (actressName) => {
        navigate(`/productlist?keyword=${encodeURIComponent(actressName)}`);
    };

    return (
        <div style={{
            padding: "20px",
            maxWidth: "900px",
            margin: "auto",
            backgroundImage: "url('/resources/background_test1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh"
        }}>
            {/* パンクズリスト */}
            <Breadcrumbs separator="›" style={{ color: "#ffcc00", marginBottom: "10px" }}>
                <Link color="inherit" component="button" onClick={() => navigate("/")}>ホーム</Link>
                <Link color="inherit" component="button" onClick={() => navigate(-1)}>検索結果</Link>
                <Typography color="inherit">商品詳細</Typography>
            </Breadcrumbs>

            <Card style={{ backgroundColor: "#0066cc", color: "#fff", padding: "20px" }}>
                <CardMedia
                    component="img"
                    style={{ maxWidth: "100%", height: "auto", cursor: "pointer" }}
                    image={product.image}
                    alt={product.title}
                    onClick={() => setSelectedImage(product.image)}
                />
                <CardContent>
                    <Typography variant="h4">{product.title}</Typography>
                    <Typography variant="body1"><strong>メーカー:</strong> {product.maker}</Typography>
                    <Typography variant="body1"><strong>発売日:</strong> {product.release_date}</Typography>
                    <Typography variant="body1"><strong>女優:</strong>
                        {product.actress.map((actress, index) => (
                            <span key={index}>
                                <Link 
                                    component="button"
                                    onClick={() => handleActressClick(actress)}
                                    style={{
                                        color: "#ffcc00",
                                        textDecoration: "underline",
                                        cursor: "pointer",
                                        marginRight: "5px"
                                    }}
                                >
                                    {actress}
                                </Link>
                            </span>
                        ))}
                    </Typography>
                    <Typography variant="body1"><strong>評価:</strong> {product.review_average}</Typography>
                    <a href={product.affiliate_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                        <Button variant="contained" style={{
                            backgroundColor: "#ff6600",
                            color: "#fff",
                            fontWeight: "bold",
                            marginTop: "10px",
                            transition: "background-color 0.3s"
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#ff3300"}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#ff6600"}>
                            詳細ページへ
                        </Button>
                    </a>
                </CardContent>
            </Card>

            <Dialog open={Boolean(selectedImage)} onClose={() => setSelectedImage(null)}>
                <DialogContent>
                    <img src={selectedImage} alt="拡大画像" style={{ width: "100%" }} />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ProductPage;
