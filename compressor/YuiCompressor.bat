@echo off
::�������JS��CSS��Ŀ¼���ű����Զ�������β��Һ�ѹ������JS��CSS
set FOLDER=..\nav
echo ���ڲ��� JavaScript��CSS ...
chdir /d %FOLDER%
for /r . %%a in (*.js,*.css) do (
@echo ����ѹ�� %%~a ...
@echo %CD%
@java -jar ../compressor/yuicompressor-2.4.8.jar --charset UTF-8 %%~fa -0 %%~fa
)
echo ��� ...
pause