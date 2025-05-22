/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // SPA로 출력하여 기존 동작 방식 유지
  // distDir: './dist', // 기존 빌드 출력 디렉토리와 일치시킴
  // images: {
  //   unoptimized: true, // SPA 모드에서 필요
  // },
  // 경로 별칭 설정은 tsconfig.json에서 관리
  transpilePackages: [], // 필요한 패키지 추가
}

export default nextConfig 