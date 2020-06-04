@echo off
::设置你的JS和CSS根目录，脚本会自动按树层次查找和压缩所有JS和CSS
set FOLDER=..\nav
echo 正在查找 JavaScript、CSS ...
chdir /d %FOLDER%
for /r . %%a in (*.js,*.css) do (
@echo 正在压缩 %%~a ...
@echo %CD%
@java -jar ../compressor/yuicompressor-2.4.8.jar --charset UTF-8 %%~fa -0 %%~fa
)
echo 完成 ...
pause