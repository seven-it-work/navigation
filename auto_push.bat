@echo off

echo %~dp0

cd /d %~dp0

call npm run build

git add *

git commit -m "auto push"

git push

pause

