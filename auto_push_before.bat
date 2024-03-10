echo off

echo %~dp0

cd /d %~dp0

git fetch origin

git merge origin/main

pause
