echo off

echo %~dp0

cd /d %~dp0

git fetch

git checkout origin/master

