import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Grid, Breadcrumbs, Link } from '@mui/material';
import AdmaxAd from './AdmaxAd'; // Correct import statement

const ProductList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get('keyword');

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!keyword) return;

    const fetchProducts = async () => {
      setLoading(true);
      const response = await fetch(
        `https://73f92o14r4.execute-api.ap-northeast-1.amazonaws.com/dev/nostalgic?keyword=${keyword}`
      );
      const data = await response.json();
      setItems(data.items);
      setLoading(false);
    };

    fetchProducts();
  }, [keyword]);

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '900px',
        margin: 'auto',
        backgroundImage: "url('/resources/background_test1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      {/* パンクズリスト */}
      <Breadcrumbs separator="›" style={{ color: '#ffcc00', marginBottom: '10px' }}>
        <Link color="inherit" component="button" onClick={() => navigate('/')}>
          ホーム
        </Link>
        <Typography color="inherit">検索結果</Typography>
      </Breadcrumbs>

      <Typography
        variant="h4"
        style={{ color: '#ffcc00', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
      >
        "{keyword}" の検索結果
      </Typography>

      {/* 広告を検索結果の上に追加 */}
      {/* <AdmaxAd /> */}

      {loading && <Typography style={{ color: '#ffcc00' }}>検索中...</Typography>}

      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.affiliate_url}>
            <Card
              onClick={() => navigate(`/product`, { state: { product: item } })}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                backgroundColor: '#0066cc',
                color: '#fff',
                boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0px 4px 10px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <CardMedia component="img" height="200" image={item.image} alt={item.title} />
              <CardContent>
                <Typography variant="body1">{item.title}</Typography>
                <Typography variant="body2">{item.maker}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* 広告を検索結果の下に追加 */}
      {/* <AdmaxAd /> */}
    </div>
  );
};

export default ProductList;
