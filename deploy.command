npm run build
git add -A
git commit -m "[UPDATE]"
git push -f origin main
git subtree push --prefix=build/ origin gh-pages