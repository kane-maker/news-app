import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, Toolbar, Typography, Button, Container, Paper, Box } from '@mui/material';
import Keyword from './components/Keyword';

// 背景画像
const backgroundImageUrl = "https://source.unsplash.com/1600x900/?tech,abstract";

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* ヘッダー */}
      <AppBar position="static" sx={{ background: "rgba(0, 0, 0, 0.7)" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Search
          </Typography>
          {isAuthenticated && (
            <Button 
              color="inherit" 
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            >
              ログアウト
            </Button>
          )}
        </Toolbar>
      </AppBar>

      {/* メインコンテンツ */}
      <Container sx={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        {!isAuthenticated ? (
          // ログイン画面
          <Paper 
            elevation={6} 
            sx={{ padding: 4, textAlign: "center", maxWidth: 400, background: "rgba(255, 255, 255, 0.9)" }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              ログインしてください
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => loginWithRedirect()}
              sx={{ width: "100%" }}
            >
              ログイン
            </Button>
          </Paper>
        ) : (
          // ニュースタブとユーザー情報
          <Box sx={{ width: "100%", maxWidth: 800 }}>
            <Paper 
              // elevation={3} 
              // sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 2, mb: 2, background: "rgba(255, 255, 255, 0.9)" }}
            >
              {/* <Typography variant="h6">ようこそ, {user.name} さん</Typography> */}
            </Paper>
            <Keyword />
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default App;
