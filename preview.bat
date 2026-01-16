@echo off
chcp 65001 >nul
echo.
echo ╔══════════════════════════════════════╗
echo ║     Hexo 本地预览服务器        ║
echo ╚══════════════════════════════════════╝
echo.

cd /d "%~dp0"

echo 启动本地服务器...
echo 预览地址: http://localhost:4000
echo 按 Ctrl+C 停止服务器
echo.

call npx hexo server

pause
