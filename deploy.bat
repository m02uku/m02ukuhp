@echo off
cd %~dp0

call npm run build
git add -A
echo ========================================
echo Commit message: %~1
echo ========================================
git commit -m %1

git config pull.rebase false
git merge --allow-unrelated-histories origin/main
git push -u origin main
git subtree push --prefix=build/ origin gh-pages
