import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // 정적 HTML 생성
    images: {
        unoptimized: true,  // Cloudflare Pages는 Image Optimization을 지원하지 않음
    },
    trailingSlash: true,  // URL에 슬래시 추가
    skipTrailingSlashRedirect: true,  // 동적 라우트 허용
    turbopack: {
        root: __dirname,  // 워크스페이스 루트를 프로젝트 폴더로 고정 (bun.lock 충돌 방지)
    },
};

export default nextConfig;

