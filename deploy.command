git add -A
git commit -am "[UPDATE]"
git push -u origin main
npm run build
git checkout gh-pages
git merge main
git add -A
git commit -am "[BUILD]"
git subtree push --prefix=build/ origin gh-pages
git checkout main
git branch