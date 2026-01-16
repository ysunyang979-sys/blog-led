@echo off
chcp 65001 >nul
echo.
echo ╔══════════════════════════════════════╗
echo ║     Hexo 博客推送到 GitHub     ║
echo ╚══════════════════════════════════════╝
echo.

cd /d "%~dp0"

echo [1/3] 检查文件变更...
git status

echo.
set /p msg="请输入提交说明 (直接回车使用默认说明): "

if "%msg%"=="" (
    set msg=更新博客 %date% %time:~0,8%
)

echo.
echo [2/3] 提交更改...
git add .
git commit -m "%msg%"

echo.
echo [3/3] 推送到 GitHub...
git push origin main

echo.
echo ╔══════════════════════════════════════╗
echo ║  推送完成！Vercel将自动部署    ║
echo ╚══════════════════════════════════════╝
echo.
pause
