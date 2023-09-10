#! /usr/bin/env sh

set -e

npm run build

cd .vitepress/dist

# if you are deploying to a custom domain
echo 'www.lorenzokimarthur.com' > CNAME

git init
git add -A 
git commit -m 'deploy'

git push -f git@github.com:artdev-hash/dev.kimlor.git master:gh-pages

cd -

