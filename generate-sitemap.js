const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://javactress.click' });

const pages = [
  '/',            // トップページ
  '/question',    // 質問ページ
  '/teach',       // 教えるページ
  '/others',      // 他人の投稿ページ
  '/ranking',     // ランキングページ
];

pages.forEach((url) => {
  sitemap.write({ url, changefreq: 'weekly', priority: 0.8 });
});
sitemap.end();

// 書き込み
streamToPromise(sitemap).then((data) =>
  require('fs').writeFileSync('./public/sitemap.xml', data.toString())
);
