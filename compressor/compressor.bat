@echo off
echo ##### start all compressions #####

echo ##### compressing css #####



set FILE_PATH=..\common\css\common.css
echo ## FILE_PATH: %FILE_PATH%
type %FILE_PATH% > tmp.css
set BUILD_STR=
set BUILD_STR=%BUILD_STR%java -jar yuicompressor-2.4.8.jar
set BUILD_STR=%BUILD_STR% --type css --charset UTF-8
set BUILD_STR=%BUILD_STR% --line-break 10000
set BUILD_STR=%BUILD_STR% -o %FILE_PATH:~0,-4%.min.css tmp.css
echo ## BUILD_STR: %BUILD_STR%
call %BUILD_STR%
del tmp.css

set FILE_PATH=..\nav\css\nav_bar.css
echo ## FILE_PATH: %FILE_PATH%
type %FILE_PATH% > tmp.css
set BUILD_STR=
set BUILD_STR=%BUILD_STR%java -jar yuicompressor-2.4.8.jar
set BUILD_STR=%BUILD_STR% --type css --charset UTF-8
set BUILD_STR=%BUILD_STR% --line-break 10000
set BUILD_STR=%BUILD_STR% -o %FILE_PATH:~0,-4%.min.css tmp.css
echo ## BUILD_STR: %BUILD_STR%
call %BUILD_STR%
del tmp.css

set FILE_PATH=..\nav\css\nav_bar_btsp.css
echo ## FILE_PATH: %FILE_PATH%
type %FILE_PATH% > tmp.css
set BUILD_STR=
set BUILD_STR=%BUILD_STR%java -jar yuicompressor-2.4.8.jar
set BUILD_STR=%BUILD_STR% --type css --charset UTF-8
set BUILD_STR=%BUILD_STR% --line-break 10000
set BUILD_STR=%BUILD_STR% -o %FILE_PATH:~0,-4%.min.css tmp.css
echo ## BUILD_STR: %BUILD_STR%
call %BUILD_STR%
del tmp.css

set FILE_PATH=..\index\css\index.css
echo ## FILE_PATH: %FILE_PATH%
type %FILE_PATH% > tmp.css
set BUILD_STR=
set BUILD_STR=%BUILD_STR%java -jar yuicompressor-2.4.8.jar
set BUILD_STR=%BUILD_STR% --type css --charset UTF-8
set BUILD_STR=%BUILD_STR% --line-break 10000
set BUILD_STR=%BUILD_STR% -o %FILE_PATH:~0,-4%.min.css tmp.css
echo ## BUILD_STR: %BUILD_STR%
call %BUILD_STR%
del tmp.css

set FILE_PATH=..\json_viewer\css\jquery.json-viewer.css
echo ## FILE_PATH: %FILE_PATH%
type %FILE_PATH% > tmp.css
set BUILD_STR=
set BUILD_STR=%BUILD_STR%java -jar yuicompressor-2.4.8.jar
set BUILD_STR=%BUILD_STR% --type css --charset UTF-8
set BUILD_STR=%BUILD_STR% --line-break 10000
set BUILD_STR=%BUILD_STR% -o %FILE_PATH:~0,-4%.min.css tmp.css
echo ## BUILD_STR: %BUILD_STR%
call %BUILD_STR%
del tmp.css

set FILE_PATH=..\json_tool\css\index.css
echo ## FILE_PATH: %FILE_PATH%
type %FILE_PATH% > tmp.css
set BUILD_STR=
set BUILD_STR=%BUILD_STR%java -jar yuicompressor-2.4.8.jar
set BUILD_STR=%BUILD_STR% --type css --charset UTF-8
set BUILD_STR=%BUILD_STR% --line-break 10000
set BUILD_STR=%BUILD_STR% -o %FILE_PATH:~0,-4%.min.css tmp.css
echo ## BUILD_STR: %BUILD_STR%
call %BUILD_STR%
del tmp.css



echo ##### compressed css complete #####

echo ##### compressing js #####



set FILE_PATH=..\common\js\common.js
echo ## FILE_PATH: %FILE_PATH%
type %FILE_PATH% > tmp.js
set BUILD_STR=
set BUILD_STR=%BUILD_STR%java -jar yuicompressor-2.4.8.jar
set BUILD_STR=%BUILD_STR% --type js --charset UTF-8
set BUILD_STR=%BUILD_STR% --line-break 10000
set BUILD_STR=%BUILD_STR% -o %FILE_PATH:~0,-3%.min.js tmp.js
echo ## BUILD_STR: %BUILD_STR%
call %BUILD_STR%
del tmp.js

set FILE_PATH=..\nav\js\nav_bar.js
echo ## FILE_PATH: %FILE_PATH%
type %FILE_PATH% > tmp.js
set BUILD_STR=
set BUILD_STR=%BUILD_STR%java -jar yuicompressor-2.4.8.jar
set BUILD_STR=%BUILD_STR% --type js --charset UTF-8
set BUILD_STR=%BUILD_STR% --line-break 10000
set BUILD_STR=%BUILD_STR% -o %FILE_PATH:~0,-3%.min.js tmp.js
echo ## BUILD_STR: %BUILD_STR%
call %BUILD_STR%
del tmp.js

set FILE_PATH=..\nav\js\nav_bar_btsp.js
echo ## FILE_PATH: %FILE_PATH%
type %FILE_PATH% > tmp.js
set BUILD_STR=
set BUILD_STR=%BUILD_STR%java -jar yuicompressor-2.4.8.jar
set BUILD_STR=%BUILD_STR% --type js --charset UTF-8
set BUILD_STR=%BUILD_STR% --line-break 10000
set BUILD_STR=%BUILD_STR% -o %FILE_PATH:~0,-3%.min.js tmp.js
echo ## BUILD_STR: %BUILD_STR%
call %BUILD_STR%
del tmp.js

set FILE_PATH=..\index\js\index.js
echo ## FILE_PATH: %FILE_PATH%
type %FILE_PATH% > tmp.js
set BUILD_STR=
set BUILD_STR=%BUILD_STR%java -jar yuicompressor-2.4.8.jar
set BUILD_STR=%BUILD_STR% --type js --charset UTF-8
set BUILD_STR=%BUILD_STR% --line-break 10000
set BUILD_STR=%BUILD_STR% -o %FILE_PATH:~0,-3%.min.js tmp.js
echo ## BUILD_STR: %BUILD_STR%
call %BUILD_STR%
del tmp.js

set FILE_PATH=..\json_viewer\js\jquery.json-viewer.js
echo ## FILE_PATH: %FILE_PATH%
type %FILE_PATH% > tmp.js
set BUILD_STR=
set BUILD_STR=%BUILD_STR%java -jar yuicompressor-2.4.8.jar
set BUILD_STR=%BUILD_STR% --type js --charset UTF-8
set BUILD_STR=%BUILD_STR% --line-break 10000
set BUILD_STR=%BUILD_STR% -o %FILE_PATH:~0,-3%.min.js tmp.js
echo ## BUILD_STR: %BUILD_STR%
call %BUILD_STR%
del tmp.js

set FILE_PATH=..\json_tool\js\index.js
echo ## FILE_PATH: %FILE_PATH%
type %FILE_PATH% > tmp.js
set BUILD_STR=
set BUILD_STR=%BUILD_STR%java -jar yuicompressor-2.4.8.jar
set BUILD_STR=%BUILD_STR% --type js --charset UTF-8
set BUILD_STR=%BUILD_STR% --line-break 10000
set BUILD_STR=%BUILD_STR% -o %FILE_PATH:~0,-3%.min.js tmp.js
echo ## BUILD_STR: %BUILD_STR%
call %BUILD_STR%
del tmp.js



echo ##### compressed js complete #####

echo ##### all compressions are complete #####
pause