@echo off
chcp 65001 >nul
echo ================================
echo       博客上传工具
echo ================================
echo.

cd /d "%~dp0"

echo [1/4] 检查文件变更...
git status

echo.
set /p msg="请输入提交说明 (直接回车使用默认说明): "

if "%msg%"=="" (
    set msg=更新博客内容 %date% %time:~0,8%
)

echo.
echo [2/4] 添加所有更改...
git add .

echo.
echo [3/4] 提交更改: %msg%
git commit -m "%msg%"

echo.
echo [4/4] 推送到GitHub...
git push origin main

echo.
echo ================================
echo       上传完成！
echo ================================
pause
