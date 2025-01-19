export async function fetchNews(topic) {
    const response = await fetch(
      `https://your-api-endpoint.com/news?topic=${topic}`
    );
    if (!response.ok) {
      throw new Error('ニュースの取得に失敗しました。');
    }
    return response.json();
  }