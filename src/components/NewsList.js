import React, { useEffect, useState } from 'react';
import { fetchNews } from '../utils/api';

function NewsList({ topic }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchNews(topic)
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('ニュース取得エラー:', error);
        setLoading(false);
      });
  }, [topic]);

  if (loading) {
    return <p>読み込み中...</p>;
  }

  if (news.length === 0) {
    return <p>該当するニュースはありません。</p>;
  }

  return (
    <ul>
      {news.map((article, index) => (
        <li key={index} style={{ marginBottom: '16px' }}>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <h3>{article.title}</h3>
          </a>
          <p>{article.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default NewsList;
