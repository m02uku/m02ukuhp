@echo off

@REM npm run build
git add -A
git commit -m "[UPDATE]"
git push -u origin main
git subtree push --prefix=build/ origin gh-pages
pause