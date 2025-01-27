import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import NewsTabs from './components/NewsTabs';

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="App">
      <h1>ポジティブニュースアプリ</h1>
      {!isAuthenticated ? (
        // ログイン画面
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h2>ログインしてください</h2>
          <button onClick={() => loginWithRedirect()}>ログイン</button>
        </div>
      ) : (
        // ニュースタブとログアウトボタン
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>ようこそ, {user.name} さん</h3>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              ログアウト
            </button>
          </div>
          <NewsTabs />
        </div>
      )}
    </div>
  );
}

export default App;
