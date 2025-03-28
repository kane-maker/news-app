import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Card, CardMedia, CardContent, Typography, Grid, Breadcrumbs } from "@mui/material";

const DMMSearch = () => {
    const [keyword, setKeyword] = useState("");
    const [actresses, setActresses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setActresses([
          { name: "波多野結衣", image: "/resources/yui_hatano.jpg" },
          { name: "麻美ゆま", image: "/resources/yuma_asami.jpg" },
          { name: "希志あいの", image: "/resources/aino_kishi.jpg" },
          { name: "つぼみ", image: "/resources/tsubomi.jpeg" },
          { name: "及川奈央", image: "/resources/nao_oikawa.jpg" },
          { name: "成瀬心美", image: "/resources/kokomi_naruse.jpeg" },
          { name: "あいださくら", image: "/resources/sakura_aida.jpg" },
          { name: "上原陵", image: "/resources/ryou_uehara.jpg" },
          { name: "琴乃", image: "/resources/kotono.jpg" },
          { name: "小西那奈", image: "/resources/nana_konishi.jpg" },
          { name: "桜ここみ", image: "/resources/kokomi_sakura.jpg" },
          { name: "佐山愛", image: "/resources/ai_sayama.jpg" },
          { name: "椎名舞", image: "/resources/mai_shiina.jpg" },
          { name: "篠原もえ", image: "/resources/moe_shinohara.jpg" },
          { name: "JULIA", image: "/resources/julia.jpg" },
          { name: "夏目ナナ", image: "/resources/nana_natsume.jpg" },
          { name: "七海なな", image: "/resources/nana_nanaumi.jpg" },
          { name: "仁科百華", image: "/resources/momoka_nishina.jpg" },
          { name: "浜崎りお", image: "/resources/rio_hamasaki.jpg" },
          { name: "早川桃華", image: "/resources/momoka_hayakawa.jpg" },
          { name: "水野はるき", image: "/resources/haruki_mizuno.jpg" },
          { name: "範田紗々", image: "/resources/sasa_handa.jpg" }
        ]);
    }, []);

    const handleSearch = () => {
        if (!keyword.trim()) return;
        navigate(`/productlist?keyword=${encodeURIComponent(keyword)}`);
    };

    const handleActressSearch = (actressName) => {
        navigate(`/productlist?keyword=${encodeURIComponent(actressName)}`);
    };

    return (
        <div style={{
            padding: "20px",
            maxWidth: "900px",
            margin: "auto",
            textAlign: "center",
            backgroundImage: "url('/resources/background_test1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh"
        }}>
            <Breadcrumbs separator="›" style={{ color: "#ffcc00", marginBottom: "10px" }}>
                <Typography color="inherit">ホーム</Typography>
            </Breadcrumbs>

            <Typography variant="h3" style={{ fontFamily: "'Courier New', monospace", color: "#ff6600", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                懐かしのビデオ
            </Typography>

            <TextField
                fullWidth
                label="キーワードを入力"
                variant="outlined"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                style={{ marginBottom: "10px", backgroundColor: "#fff", borderRadius: "5px" }}
            />
            <Button 
                variant="contained" 
                style={{
                    backgroundColor: "#ff6600", 
                    color: "#fff", 
                    fontWeight: "bold",
                    transition: "background-color 0.3s, transform 0.2s"
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#ff3300"}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#ff6600"}
                onClick={handleSearch}
                fullWidth
            >
                検索する
            </Button>

            {/* Admax 広告を検索バーの下に追加 */}
            {/* <AdmaxAd /> */}

            {/* おすすめ女優リスト */}
            <Typography variant="h5" style={{ marginTop: "20px", color: "#ffcc00" }}>おすすめ女優</Typography>
            <Grid container spacing={2} justifyContent="center">
                {actresses.map((actress, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                        <Card 
                            onClick={() => handleActressSearch(actress.name)}
                            style={{
                                cursor: "pointer",
                                textAlign: "center",
                                backgroundColor: "#0066cc",
                                color: "#fff",
                                boxShadow: "2px 2px 10px rgba(0,0,0,0.3)",
                                transition: "transform 0.3s"
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                        >
                            <CardMedia
                                component="img"
                                image={actress.image}
                                alt={actress.name}
                                style={{ height: "350px", objectFit: "cover" }}
                            />
                            <CardContent>
                                <Typography variant="body1">{actress.name}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Admax 広告を女優リストの下に追加 */}
            {/* <AdmaxAd /> */}
        </div>
    );
};

export default DMMSearch;
