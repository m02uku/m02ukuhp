@echo off
cd %~dp0

call npm run build
git add -A
echo ========================================
echo Commit message: %~1
echo ========================================
git commit -m %1
git push -f origin main
git subtree push --prefix=build/ origin gh-pages