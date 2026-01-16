@echo off
chcp 65001 >nul
echo.
echo ╔══════════════════════════════════════╗
echo ║     创建新博客文章             ║
echo ╚══════════════════════════════════════╝
echo.

cd /d "%~dp0"

set /p title="请输入文章标题: "

if "%title%"=="" (
    echo 错误: 标题不能为空!
    pause
    exit /b 1
)

echo.
echo 创建文章: %title%
call npx hexo new "%title%"

echo.
echo 文章已创建！
echo 请在 source/_posts/ 目录下编辑您的文章
echo.
pause
