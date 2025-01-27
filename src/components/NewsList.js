import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react'; // OAuth0 React SDK
import { fetchNews } from '../utils/fetchNews';

function NewsList({ topic }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, getIdTokenClaims } = useAuth0();

  useEffect(() => {
    setLoading(true);
    fetchNews(topic)
      .then((data) => {
        setNews(data.articles || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error('ニュース取得エラー:', error);
        setLoading(false);
      });
  }, [topic]);

  const saveNewsList = async () => {
    try {
      const idToken = await getIdTokenClaims();
      const newsList = news.map((article) => ({
        title: article.title,
        url: article.url,
        description: article.description,
      }));

      const response = await fetch('https://fbdzqeccf7.execute-api.ap-northeast-1.amazonaws.com/prod/news', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${idToken.__raw}`, // IDトークンをヘッダーに追加
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.sub, // OAuth0のsub
          newsList,
        }),
        mode: 'cors', // CORSを有効にする
      });

      const result = await response.json();
      console.log('保存結果:', result);
    } catch (error) {
      console.error('ニュース保存エラー:', error);
    }
  };

  return (
    <div>
      <h2>ニュースリスト</h2>
      {loading && <p>読み込み中...</p>}
      {!loading && news.length === 0 && <p>該当するニュースはありません。</p>}
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <h3>{article.title}</h3>
            </a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
      <button onClick={saveNewsList}>ニュースを保存</button>
    </div>
  );
}

export default NewsList;
