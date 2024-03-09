/** @type {import('next').NextConfig} */

const nextConfig = {
  // 全ての API routes にマッチ
reactStrictMode: false,
async headers() {
    return [
    {
        source: "/api/:path*",
        headers: [
        {
            // CORSを許可するオリジン
            key: "Access-Control-Allow-Origin",
            // すべてのオリジンを許可するなら * (アスタリスク)
            // ただセキュリティ的にはよろしくないので注意
            value: "https://sample-prisma-next-app.vercel.app",
        },
        {
            // 許可するメソッド
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,POST",
        },
        {
            // 許可するリクエストヘッダ
            key: "Access-Control-Allow-Headers",
            value: "Content-Type",
        },
        ],
    },
    ];
},
};

export default nextConfig;
