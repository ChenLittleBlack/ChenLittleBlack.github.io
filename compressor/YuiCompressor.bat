@echo off

set FOLDER=..\css
echo find JavaScript and CSS in %CD%
chdir /d %FOLDER%
for /r . %%a in (common*.css) do (
@echo compressing %%~a ...
@echo %CD%
@java -jar ../compressor/yuicompressor-2.4.8.jar --charset UTF-8 %%~fa -0 %%~fa
)
echo %FOLDER% finish!

set FOLDER=..\js
echo find JavaScript and CSS in %CD%
chdir /d %FOLDER%
for /r . %%a in (common*.js) do (
@echo compressing %%~a ...
@echo %CD%
@java -jar ../compressor/yuicompressor-2.4.8.jar --charset UTF-8 %%~fa -0 %%~fa
)
echo %FOLDER% finish!

set FOLDER=..\index
echo find JavaScript and CSS in %CD%
chdir /d %FOLDER%
for /r . %%a in (index.js, index.css) do (
@echo compressing %%~a ...
@echo %CD%
@java -jar ../compressor/yuicompressor-2.4.8.jar --charset UTF-8 %%~fa -0 %%~fa
)
echo %FOLDER% finish!

set FOLDER=..\json-viewer
echo find JavaScript and CSS in %CD%
chdir /d %FOLDER%
for /r . %%a in (*.js, *.css) do (
@echo compressing %%~a ...
@echo %CD%
@java -jar ../compressor/yuicompressor-2.4.8.jar --charset UTF-8 %%~fa -0 %%~fa
)
echo %FOLDER% finish!

set FOLDER=..\json_tool
echo find JavaScript and CSS in %CD%
chdir /d %FOLDER%
for /r . %%a in (*.js, *.css) do (
@echo compressing %%~a ...
@echo %CD%
@java -jar ../compressor/yuicompressor-2.4.8.jar --charset UTF-8 %%~fa -0 %%~fa
)
echo %FOLDER% finish!

pause