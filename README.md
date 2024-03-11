# Laravel & Next.js Todoアプリ ビギナー用

*使用技術一覧*  
Laravel 10.3.3 / Next.js 14.1.0 / Docker 24.0.6 / tailwind 3.4.1

*環境構築方法*

backend : 
  1. docker-compose up -d --build
  2. .env
```
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=fullstack_todo
DB_USERNAME=jony_task
DB_PASSWORD=passjonytask
FRONTEND_URL=http://localhost:3000
```
Frontend : 
  1. npm install
  2. npm run dev
  3. .env.local
```
NEXT_PUBLIC_BACKEND_URL=http://localhost
```
