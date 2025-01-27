import axios from "axios";

export async function fetchNews(topic) {
  try {
    const response = await axios.post(
      `https://9957997add.execute-api.ap-northeast-1.amazonaws.com/prod?topic=${topic}`,
      {}, // リクエストボディ（今回は空）
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // Axiosでは response.ok は存在しない
    if (response.status !== 200) {
      throw new Error('ニュースの取得に失敗しました。');
    }

    return response.data; // Axiosは自動的にJSONをパース
  } catch (error) {
    console.error('fetchNewsエラー:', error.message);
    throw error; // 呼び出し元でキャッチされる
  }
}
